const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { buildListQuery } = require('../utils/queryHelper');

// GET /books - list all books with optional filtering, search, sorting & pagination
router.get('/', (req, res) => {
  const { sql, countSql, params } = buildListQuery('books', req.query, {
    allowedFilters: ['genre', 'author', 'year'],
    searchFields: ['title', 'author', 'genre', 'description'],
    defaultSort: 'id',
    defaultOrder: 'ASC'
  });

  const total = db.prepare(countSql).get(params).total;
  const rows = db.prepare(sql).all(params);

  res.setHeader('X-Total-Count', total);
  res.json(rows);
});

// GET /books/:id - get single book by ID
router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM books WHERE id = ?').get(req.params.id);
  if (!row) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.json(row);
});

// POST /books - create new book
router.post('/', (req, res) => {
  const { title, author, genre, year, pages, rating, cover, description } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'title and author are required fields' });
  }

  const defaultCover = 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80';

  const insert = db.prepare(`
    INSERT INTO books (title, author, genre, year, pages, rating, cover, description)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const result = insert.run(
    title,
    author,
    genre || 'General',
    year || new Date().getFullYear(),
    pages || 0,
    rating || 0.0,
    cover || defaultCover,
    description || ''
  );

  const created = db.prepare('SELECT * FROM books WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(created);
});

// PUT /books/:id - full update of book
router.put('/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM books WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const { title, author, genre, year, pages, rating, cover, description } = req.body;

  db.prepare(`
    UPDATE books SET
      title = ?,
      author = ?,
      genre = ?,
      year = ?,
      pages = ?,
      rating = ?,
      cover = ?,
      description = ?
    WHERE id = ?
  `).run(
    title !== undefined ? title : existing.title,
    author !== undefined ? author : existing.author,
    genre !== undefined ? genre : existing.genre,
    year !== undefined ? year : existing.year,
    pages !== undefined ? pages : existing.pages,
    rating !== undefined ? rating : existing.rating,
    cover !== undefined ? cover : existing.cover,
    description !== undefined ? description : existing.description,
    req.params.id
  );

  const updated = db.prepare('SELECT * FROM books WHERE id = ?').get(req.params.id);
  res.json(updated);
});

// PATCH /books/:id - partial update of book
router.patch('/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM books WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const incoming = req.body;

  db.prepare(`
    UPDATE books SET
      title = ?,
      author = ?,
      genre = ?,
      year = ?,
      pages = ?,
      rating = ?,
      cover = ?,
      description = ?
    WHERE id = ?
  `).run(
    incoming.title !== undefined ? incoming.title : existing.title,
    incoming.author !== undefined ? incoming.author : existing.author,
    incoming.genre !== undefined ? incoming.genre : existing.genre,
    incoming.year !== undefined ? incoming.year : existing.year,
    incoming.pages !== undefined ? incoming.pages : existing.pages,
    incoming.rating !== undefined ? incoming.rating : existing.rating,
    incoming.cover !== undefined ? incoming.cover : existing.cover,
    incoming.description !== undefined ? incoming.description : existing.description,
    req.params.id
  );

  const updated = db.prepare('SELECT * FROM books WHERE id = ?').get(req.params.id);
  res.json(updated);
});

// DELETE /books/:id - delete a book
router.delete('/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM books WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'Book not found' });
  }

  db.prepare('DELETE FROM books WHERE id = ?').run(req.params.id);
  res.json({ message: 'Book deleted successfully', id: Number(req.params.id) });
});

module.exports = router;
