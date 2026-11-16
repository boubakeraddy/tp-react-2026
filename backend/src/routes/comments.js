const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { buildListQuery } = require('../utils/queryHelper');

// GET /comments - list all comments with optional filtering, search, sorting & pagination
router.get('/', (req, res) => {
  const { sql, countSql, params } = buildListQuery('comments', req.query, {
    allowedFilters: ['postId', 'email'],
    searchFields: ['name', 'email', 'body'],
    defaultSort: 'id',
    defaultOrder: 'ASC'
  });

  const total = db.prepare(countSql).get(params).total;
  const rows = db.prepare(sql).all(params);

  res.setHeader('X-Total-Count', total);
  res.json(rows);
});

// GET /comments/:id - get single comment by ID
router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM comments WHERE id = ?').get(req.params.id);
  if (!row) {
    return res.status(404).json({ error: 'Comment not found' });
  }
  res.json(row);
});

// POST /comments - create new comment
router.post('/', (req, res) => {
  const { postId, name, email, body } = req.body;
  if (!postId || !name || !email || !body) {
    return res.status(400).json({ error: 'postId, name, email, and body are required fields' });
  }

  // Ensure post exists
  const post = db.prepare('SELECT id FROM posts WHERE id = ?').get(postId);
  if (!post) {
    return res.status(400).json({ error: `Post with id ${postId} does not exist` });
  }

  const insert = db.prepare('INSERT INTO comments (postId, name, email, body) VALUES (?, ?, ?, ?)');
  const result = insert.run(postId, name, email, body);

  const created = db.prepare('SELECT * FROM comments WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(created);
});

// PUT /comments/:id - full update of comment
router.put('/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM comments WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'Comment not found' });
  }

  const { postId, name, email, body } = req.body;
  const newPostId = postId || existing.postId;
  const newName = name || existing.name;
  const newEmail = email || existing.email;
  const newBody = body || existing.body;

  db.prepare('UPDATE comments SET postId = ?, name = ?, email = ?, body = ? WHERE id = ?').run(
    newPostId,
    newName,
    newEmail,
    newBody,
    req.params.id
  );

  const updated = db.prepare('SELECT * FROM comments WHERE id = ?').get(req.params.id);
  res.json(updated);
});

// PATCH /comments/:id - partial update of comment
router.patch('/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM comments WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'Comment not found' });
  }

  const newPostId = req.body.postId !== undefined ? req.body.postId : existing.postId;
  const newName = req.body.name !== undefined ? req.body.name : existing.name;
  const newEmail = req.body.email !== undefined ? req.body.email : existing.email;
  const newBody = req.body.body !== undefined ? req.body.body : existing.body;

  db.prepare('UPDATE comments SET postId = ?, name = ?, email = ?, body = ? WHERE id = ?').run(
    newPostId,
    newName,
    newEmail,
    newBody,
    req.params.id
  );

  const updated = db.prepare('SELECT * FROM comments WHERE id = ?').get(req.params.id);
  res.json(updated);
});

// DELETE /comments/:id - delete a comment
router.delete('/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM comments WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'Comment not found' });
  }

  db.prepare('DELETE FROM comments WHERE id = ?').run(req.params.id);
  res.json({ message: 'Comment deleted successfully', id: Number(req.params.id) });
});

module.exports = router;
