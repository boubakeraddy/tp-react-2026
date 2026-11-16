const express = require('express');
const router = express.Router();
const { generateAvatarSVG } = require('../../services/avatarGenerator');

// Random avatar endpoint
router.get('/random', (req, res) => {
  const seed = req.query.seed || Math.random().toString(36).substring(2, 10);
  const size = req.query.size || 128;
  const gender = req.query.gender || null;

  const svg = generateAvatarSVG(seed, { size, gender });

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.send(svg);
});

// Deterministic avatar endpoint by seed / ID (e.g. /api/v2/avatars/1.svg or /api/v2/avatars/Bret)
router.get('/:seed', (req, res) => {
  let rawSeed = req.params.seed;
  if (rawSeed.endsWith('.svg')) {
    rawSeed = rawSeed.slice(0, -4);
  }

  const size = req.query.size || 128;
  const gender = req.query.gender || null;

  const svg = generateAvatarSVG(rawSeed, { size, gender });

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.send(svg);
});

module.exports = router;