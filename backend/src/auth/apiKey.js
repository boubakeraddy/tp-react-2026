const { db } = require('../db/database');

function findUserByApiKey(apiKey) {
  if (!apiKey) return null;

  return db.prepare(`
    SELECT id, username, email, name
    FROM users
    WHERE api_key = ?
  `).get(apiKey);
}

function validateApiKey(apiKey) {
  const user = findUserByApiKey(apiKey);
  return user ? { valid: true, user } : { valid: false, user: null };
}

function regenerateApiKey(userId) {
  const crypto = require('crypto');
  const newApiKey = 'tpk_' + crypto.randomBytes(24).toString('base64url');

  db.prepare('UPDATE users SET api_key = ? WHERE id = ?').run(newApiKey, userId);

  return newApiKey;
}

module.exports = {
  findUserByApiKey,
  validateApiKey,
  regenerateApiKey
};