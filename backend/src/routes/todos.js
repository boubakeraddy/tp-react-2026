const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { formatTodo } = require('../utils/formatters');
const { buildListQuery } = require('../utils/queryHelper');

// GET /todos - list all todos with optional filtering, search, sorting & pagination
router.get('/', (req, res) => {
  const { sql, countSql, params } = buildListQuery('todos', req.query, {
    allowedFilters: ['userId', 'completed'],
    searchFields: ['title'],
    defaultSort: 'id',
    defaultOrder: 'ASC'
  });

  const total = db.prepare(countSql).get(params).total;
  const rows = db.prepare(sql).all(params);

  res.setHeader('X-Total-Count', total);
  res.json(rows.map(formatTodo));
});

// GET /todos/:id - get single todo by ID
router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM todos WHERE id = ?').get(req.params.id);
  if (!row) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.json(formatTodo(row));
});

// POST /todos - create new todo
router.post('/', (req, res) => {
  const { userId, title, completed } = req.body;
  if (!userId || !title) {
    return res.status(400).json({ error: 'userId and title are required fields' });
  }

  // Ensure user exists
  const user = db.prepare('SELECT id FROM users WHERE id = ?').get(userId);
  if (!user) {
    return res.status(400).json({ error: `User with id ${userId} does not exist` });
  }

  const isCompleted = (completed === true || completed === 1 || completed === 'true') ? 1 : 0;

  const insert = db.prepare('INSERT INTO todos (userId, title, completed) VALUES (?, ?, ?)');
  const result = insert.run(userId, title, isCompleted);

  const created = db.prepare('SELECT * FROM todos WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(formatTodo(created));
});

// PUT /todos/:id - full update of todo
router.put('/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM todos WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const { userId, title, completed } = req.body;
  const newUserId = userId || existing.userId;
  const newTitle = title || existing.title;
  const newCompleted = (completed !== undefined) ? (completed ? 1 : 0) : existing.completed;

  db.prepare('UPDATE todos SET userId = ?, title = ?, completed = ? WHERE id = ?').run(
    newUserId,
    newTitle,
    newCompleted,
    req.params.id
  );

  const updated = db.prepare('SELECT * FROM todos WHERE id = ?').get(req.params.id);
  res.json(formatTodo(updated));
});

// PATCH /todos/:id - partial update of todo (e.g. toggling completed status)
router.patch('/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM todos WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const newUserId = req.body.userId !== undefined ? req.body.userId : existing.userId;
  const newTitle = req.body.title !== undefined ? req.body.title : existing.title;
  let newCompleted = existing.completed;
  if (req.body.completed !== undefined) {
    newCompleted = (req.body.completed === true || req.body.completed === 1 || req.body.completed === 'true') ? 1 : 0;
  }

  db.prepare('UPDATE todos SET userId = ?, title = ?, completed = ? WHERE id = ?').run(
    newUserId,
    newTitle,
    newCompleted,
    req.params.id
  );

  const updated = db.prepare('SELECT * FROM todos WHERE id = ?').get(req.params.id);
  res.json(formatTodo(updated));
});

// DELETE /todos/:id - delete a todo
router.delete('/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM todos WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  db.prepare('DELETE FROM todos WHERE id = ?').run(req.params.id);
  res.json({ message: 'Todo deleted successfully', id: Number(req.params.id) });
});

module.exports = router;
