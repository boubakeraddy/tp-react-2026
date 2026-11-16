const express = require('express');
const router = express.Router();
const { db } = require('../db/database');
const { formatUser, formatTodo } = require('../utils/formatters');
const { buildListQuery } = require('../utils/queryHelper');

// Helper to flatten nested JSONPlaceholder address & company objects for SQLite storage
function extractUserFields(body) {
  const address = body.address || {};
  const geo = address.geo || {};
  const company = body.company || {};

  return {
    name: body.name || '',
    username: body.username || (body.name ? body.name.toLowerCase().replace(/\s+/g, '') : 'user'),
    email: body.email || '',
    avatar: body.avatar || null,
    street: address.street || body.street || '',
    suite: address.suite || body.suite || '',
    city: address.city || body.city || '',
    zipcode: address.zipcode || body.zipcode || '',
    lat: geo.lat || body.lat || '',
    lng: geo.lng || body.lng || '',
    phone: body.phone || '',
    website: body.website || '',
    companyName: company.name || body.companyName || '',
    companyCatchPhrase: company.catchPhrase || body.companyCatchPhrase || '',
    companyBs: company.bs || body.companyBs || ''
  };
}

// GET /users - list all users with optional filtering, search, sorting & pagination
router.get('/', (req, res) => {
  const { sql, countSql, params } = buildListQuery('users', req.query, {
    allowedFilters: ['email', 'username', 'city'],
    searchFields: ['name', 'username', 'email', 'city', 'companyName'],
    defaultSort: 'id',
    defaultOrder: 'ASC'
  });

  const total = db.prepare(countSql).get(params).total;
  const rows = db.prepare(sql).all(params);

  res.setHeader('X-Total-Count', total);
  res.json(rows.map(r => formatUser(r, req)));
});

// GET /users/:id - get single user by ID
router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id);
  if (!row) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(formatUser(row, req));
});

// GET /users/:id/posts - get posts written by user
router.get('/:id/posts', (req, res) => {
  const user = db.prepare('SELECT id FROM users WHERE id = ?').get(req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  const rows = db.prepare('SELECT * FROM posts WHERE userId = ? ORDER BY id ASC').all(req.params.id);
  res.json(rows);
});

// GET /users/:id/todos - get todos belonging to user
router.get('/:id/todos', (req, res) => {
  const user = db.prepare('SELECT id FROM users WHERE id = ?').get(req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  const rows = db.prepare('SELECT * FROM todos WHERE userId = ? ORDER BY id ASC').all(req.params.id);
  res.json(rows.map(formatTodo));
});

// POST /users - create a new user
router.post('/', (req, res) => {
  if (!req.body.name || !req.body.email) {
    return res.status(400).json({ error: 'Name and email are required fields' });
  }

  const emailToTest = req.body.email.trim();
  const existingEmail = db.prepare('SELECT id FROM users WHERE LOWER(email) = LOWER(?)').get(emailToTest);
  if (existingEmail) {
    return res.status(400).json({ error: 'Email already exists' });
  }

  const fields = extractUserFields(req.body);
  fields.email = emailToTest;

  const insert = db.prepare(`
    INSERT INTO users (
      name, username, email, avatar, street, suite, city, zipcode,
      lat, lng, phone, website, companyName, companyCatchPhrase, companyBs
    ) VALUES (
      @name, @username, @email, @avatar, @street, @suite, @city, @zipcode,
      @lat, @lng, @phone, @website, @companyName, @companyCatchPhrase, @companyBs
    )
  `);

  const result = insert.run(fields);
  const newId = result.lastInsertRowid;

  // If avatar wasn't explicitly supplied, assign deterministic SVG avatar for this ID
  if (!fields.avatar) {
    db.prepare('UPDATE users SET avatar = ? WHERE id = ?').run(`/avatars/${newId}.svg`, newId);
  }

  const createdUser = db.prepare('SELECT * FROM users WHERE id = ?').get(newId);
  res.status(201).json(formatUser(createdUser, req));
});

// PUT /users/:id - full update of a user
router.put('/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'User not found' });
  }

  const fields = extractUserFields(req.body);
  if (fields.email) {
    const emailToTest = fields.email.trim();
    const duplicate = db.prepare('SELECT id FROM users WHERE LOWER(email) = LOWER(?) AND id != ?').get(emailToTest, req.params.id);
    if (duplicate) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    fields.email = emailToTest;
  }

  fields.avatar = fields.avatar || existing.avatar || `/avatars/${req.params.id}.svg`;
  fields.id = req.params.id;

  db.prepare(`
    UPDATE users SET
      name = @name,
      username = @username,
      email = @email,
      avatar = @avatar,
      street = @street,
      suite = @suite,
      city = @city,
      zipcode = @zipcode,
      lat = @lat,
      lng = @lng,
      phone = @phone,
      website = @website,
      companyName = @companyName,
      companyCatchPhrase = @companyCatchPhrase,
      companyBs = @companyBs
    WHERE id = @id
  `).run(fields);

  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id);
  res.json(formatUser(updated, req));
});

// PATCH /users/:id - partial update of a user
router.patch('/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'User not found' });
  }

  const incoming = req.body;
  if (incoming.email !== undefined) {
    const emailToTest = String(incoming.email).trim();
    const duplicate = db.prepare('SELECT id FROM users WHERE LOWER(email) = LOWER(?) AND id != ?').get(emailToTest, req.params.id);
    if (duplicate) {
      return res.status(400).json({ error: 'Email already exists' });
    }
  }

  const address = incoming.address || {};
  const geo = address.geo || {};
  const company = incoming.company || {};

  const updatedFields = {
    id: req.params.id,
    name: incoming.name !== undefined ? incoming.name : existing.name,
    username: incoming.username !== undefined ? incoming.username : existing.username,
    email: incoming.email !== undefined ? String(incoming.email).trim() : existing.email,
    avatar: incoming.avatar !== undefined ? incoming.avatar : existing.avatar,
    street: address.street !== undefined ? address.street : (incoming.street !== undefined ? incoming.street : existing.street),
    suite: address.suite !== undefined ? address.suite : (incoming.suite !== undefined ? incoming.suite : existing.suite),
    city: address.city !== undefined ? address.city : (incoming.city !== undefined ? incoming.city : existing.city),
    zipcode: address.zipcode !== undefined ? address.zipcode : (incoming.zipcode !== undefined ? incoming.zipcode : existing.zipcode),
    lat: geo.lat !== undefined ? geo.lat : (incoming.lat !== undefined ? incoming.lat : existing.lat),
    lng: geo.lng !== undefined ? geo.lng : (incoming.lng !== undefined ? incoming.lng : existing.lng),
    phone: incoming.phone !== undefined ? incoming.phone : existing.phone,
    website: incoming.website !== undefined ? incoming.website : existing.website,
    companyName: company.name !== undefined ? company.name : (incoming.companyName !== undefined ? incoming.companyName : existing.companyName),
    companyCatchPhrase: company.catchPhrase !== undefined ? company.catchPhrase : (incoming.companyCatchPhrase !== undefined ? incoming.companyCatchPhrase : existing.companyCatchPhrase),
    companyBs: company.bs !== undefined ? company.bs : (incoming.companyBs !== undefined ? incoming.companyBs : existing.companyBs)
  };

  db.prepare(`
    UPDATE users SET
      name = @name,
      username = @username,
      email = @email,
      avatar = @avatar,
      street = @street,
      suite = @suite,
      city = @city,
      zipcode = @zipcode,
      lat = @lat,
      lng = @lng,
      phone = @phone,
      website = @website,
      companyName = @companyName,
      companyCatchPhrase = @companyCatchPhrase,
      companyBs = @companyBs
    WHERE id = @id
  `).run(updatedFields);

  const updated = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id);
  res.json(formatUser(updated, req));
});

// DELETE /users/:id - delete a user
router.delete('/:id', (req, res) => {
  const existing = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id);
  if (!existing) {
    return res.status(404).json({ error: 'User not found' });
  }

  db.prepare('DELETE FROM users WHERE id = ?').run(req.params.id);
  res.json({ message: 'User deleted successfully', id: Number(req.params.id) });
});

module.exports = router;
