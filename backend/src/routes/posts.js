const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { buildListQuery } = require('../utils/queryHelper');

// GET /posts - list all posts with optional filtering, search, sorting & pagination
router.get('/', (req, res) => {
  const { sql, countSql, params } = buildListQuery('posts', req.query, {
    allowedFilters: ['userId'],
    searchFields: ['title', 'body'],
    defaultSort: 'id',
    defaultOrder: 'ASC'
  });

  const total = db.prepare(countSql).get(params).total;
  const rows = db.prepare(sql).all(params);

  res.setHeader('X-Total-Count', total);
  res.json(rows);
});

// GET /posts/:id - get single post by ID
router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
  if (!row) {
    return res.status(404).json({ error: 'Post not found' });
  }
  res.json(row);
});

// GET /posts/:id/comments - get comments belonging to a post
router.get('/:id/comments', (req, res) => {
  const post = db.prepare('SELECT id FROM posts WHERE id = ?').get(req.params.id);
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  const comments = db.prepare('SELECT * FROM comments WHERE postId = ? ORDER BY id ASC').all(req.params.id);
  res.json(comments);
});

// POST /posts - create new post
router.post('/', (req, res) => {
  const { userId, title, body } = req.body;
  if (!userId || !title || !body) {
    return res.status(400).json({ error: 'userId, title, and body are required fields' });
  }

  // Ensure user exists
  const user = db.prepare('SELECT id FROM users WHERE id = ?').get(userId);
  if (!user) {
    return res.status(400).json({ error: `User with id ${userId} does not exist` });
  }

  const insert = db.prepare('INSERT INTO posts (userId, title, body) VALUES (?, ?, ?)');
  const result = insert.run(userId, title, body);

  const created = db.prepare('SELECT * FROM posts WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(created);
});

// PUT /posts/:id - full update of post
router.put('/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'Post not found' });
  }

  const { userId, title, body } = req.body;
  const newUserId = userId || existing.userId;
  const newTitle = title || existing.title;
  const newBody = body || existing.body;

  db.prepare('UPDATE posts SET userId = ?, title = ?, body = ? WHERE id = ?').run(
    newUserId,
    newTitle,
    newBody,
    req.params.id
  );

  const updated = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
  res.json(updated);
});

// PATCH /posts/:id - partial update of post
router.patch('/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'Post not found' });
  }

  const newUserId = req.body.userId !== undefined ? req.body.userId : existing.userId;
  const newTitle = req.body.title !== undefined ? req.body.title : existing.title;
  const newBody = req.body.body !== undefined ? req.body.body : existing.body;

  db.prepare('UPDATE posts SET userId = ?, title = ?, body = ? WHERE id = ?').run(
    newUserId,
    newTitle,
    newBody,
    req.params.id
  );

  const updated = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
  res.json(updated);
});

// DELETE /posts/:id - delete a post
router.delete('/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'Post not found' });
  }

  db.prepare('DELETE FROM posts WHERE id = ?').run(req.params.id);
  res.json({ message: 'Post deleted successfully', id: Number(req.params.id) });
});

module.exports = router;
