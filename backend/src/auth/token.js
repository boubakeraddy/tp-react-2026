const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { db } = require('../db/database');

const JWT_SECRET = process.env.JWT_SECRET || 'tp-react-dev-secret-change-in-production';
const ACCESS_TOKEN_EXPIRY = '15m';
const REFRESH_TOKEN_EXPIRY_DAYS = 7;

function generateAccessToken(user) {
  return jwt.sign(
    { userId: user.id, username: user.username, email: user.email },
    JWT_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );
}

function generateRefreshToken() {
  return crypto.randomBytes(48).toString('base64url');
}

function storeRefreshToken(userId, token) {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + REFRESH_TOKEN_EXPIRY_DAYS);

  db.prepare(`
    INSERT INTO refresh_tokens (user_id, token, expires_at)
    VALUES (?, ?, ?)
  `).run(userId, token, expiresAt.toISOString());

  return token;
}

function verifyAccessToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}

function verifyRefreshToken(token) {
  const row = db.prepare(`
    SELECT rt.*, u.id as userId, u.username, u.email
    FROM refresh_tokens rt
    JOIN users u ON rt.user_id = u.id
    WHERE rt.token = ? AND rt.expires_at > datetime('now')
  `).get(token);

  return row || null;
}

function revokeRefreshToken(token) {
  db.prepare('DELETE FROM refresh_tokens WHERE token = ?').run(token);
}

function revokeAllUserRefreshTokens(userId) {
  db.prepare('DELETE FROM refresh_tokens WHERE user_id = ?').run(userId);
}

function createTokenPair(user) {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken();
  storeRefreshToken(user.id, refreshToken);
  return { accessToken, refreshToken };
}

function refreshAccessToken(refreshToken) {
  const tokenData = verifyRefreshToken(refreshToken);
  if (!tokenData) {
    return null;
  }

  // Revoke old refresh token (rotation)
  revokeRefreshToken(refreshToken);

  // Create new token pair
  const user = {
    id: tokenData.userId,
    username: tokenData.username,
    email: tokenData.email
  };
  return createTokenPair(user);
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  storeRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  revokeRefreshToken,
  revokeAllUserRefreshTokens,
  createTokenPair,
  refreshAccessToken,
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_EXPIRY_DAYS
};