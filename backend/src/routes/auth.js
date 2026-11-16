const express = require('express');
const router = express.Router();
const { validateApiKey } = require('../auth/apiKey');
const { createTokenPair, refreshAccessToken } = require('../auth/token');

// POST /api/v2/auth/token - Exchange API key for Bearer token
router.post('/token', (req, res) => {
  const { api_key } = req.body;

  if (!api_key) {
    return res.status(400).json({
      error: 'Missing api_key',
      message: 'Request body must contain api_key'
    });
  }

  const { valid, user } = validateApiKey(api_key);

  if (!valid) {
    return res.status(401).json({
      error: 'Invalid API key',
      message: 'The provided API key is invalid or does not exist'
    });
  }

  const { accessToken, refreshToken } = createTokenPair(user);

  res.json({
    access_token: accessToken,
    token_type: 'Bearer',
    expires_in: 900, // 15 minutes in seconds
    refresh_token: refreshToken
  });
});

// POST /api/v2/auth/refresh - Refresh access token using refresh token
router.post('/refresh', (req, res) => {
  const { refresh_token } = req.body;

  if (!refresh_token) {
    return res.status(400).json({
      error: 'Missing refresh_token',
      message: 'Request body must contain refresh_token'
    });
  }

  const tokens = refreshAccessToken(refresh_token);

  if (!tokens) {
    return res.status(401).json({
      error: 'Invalid or expired refresh token',
      message: 'The provided refresh token is invalid, expired, or has been revoked'
    });
  }

  res.json({
    access_token: tokens.accessToken,
    token_type: 'Bearer',
    expires_in: 900,
    refresh_token: tokens.refreshToken
  });
});

module.exports = router;