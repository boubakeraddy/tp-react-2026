const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../auth/verify');

// Apply Bearer token authentication to all v2 routes
router.use(verifyToken);

// Import v2 resource routes
const usersRouter = require('./users');
const postsRouter = require('./posts');
const commentsRouter = require('./comments');
const todosRouter = require('./todos');
const booksRouter = require('./books');
const avatarsRouter = require('./avatars');

// Mount v2 routes
router.use('/users', usersRouter);
router.use('/posts', postsRouter);
router.use('/comments', commentsRouter);
router.use('/todos', todosRouter);
router.use('/books', booksRouter);
router.use('/avatars', avatarsRouter);

// Health check endpoint (still requires auth)
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    version: 'v2',
    authenticated: true,
    user: req.user
  });
});

module.exports = router;