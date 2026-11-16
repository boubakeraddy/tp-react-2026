const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const Database = require('better-sqlite3');
const { DB_DIR, DB_PATH } = require('../config');
const { createTablesSQL } = require('./schema');
const { users, posts, comments, todos, books } = require('./seedData');

// Ensure database directory exists
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

// Connect to SQLite database
const db = new Database(DB_PATH);

// Optimize SQLite settings
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

function generateApiKey() {
  return 'tpk_' + crypto.randomBytes(24).toString('base64url');
}

function initSchema() {
  db.exec(createTablesSQL);
}

function seedDatabase(clearExisting = false) {
  const transaction = db.transaction(() => {
    if (clearExisting) {
      db.prepare('DELETE FROM comments').run();
      db.prepare('DELETE FROM todos').run();
      db.prepare('DELETE FROM posts').run();
      db.prepare('DELETE FROM users').run();
      db.prepare('DELETE FROM books').run();
      db.prepare('DELETE FROM refresh_tokens').run();
      // Reset sqlite sequence
      db.prepare("DELETE FROM sqlite_sequence WHERE name IN ('users', 'posts', 'comments', 'todos', 'books', 'refresh_tokens')").run();
    }

    const userCount = db.prepare('SELECT COUNT(*) as count FROM users').get().count;
    if (userCount === 0) {
      console.log('🌱 Seeding database with initial data...');

      // Seed users
      const insertUser = db.prepare(`
        INSERT INTO users (
          id, name, username, email, avatar, street, suite, city, zipcode,
          lat, lng, phone, website, companyName, companyCatchPhrase, companyBs, api_key
        ) VALUES (
          @id, @name, @username, @email, @avatar, @street, @suite, @city, @zipcode,
          @lat, @lng, @phone, @website, @companyName, @companyCatchPhrase, @companyBs, @api_key
        )
      `);

      for (const u of users) {
        insertUser.run({
          ...u,
          avatar: `/avatars/${u.id}.svg`,
          api_key: generateApiKey()
        });
      }

      // Seed posts
      const insertPost = db.prepare(`
        INSERT INTO posts (id, userId, title, body)
        VALUES (@id, @userId, @title, @body)
      `);
      for (const p of posts) {
        insertPost.run(p);
      }

      // Seed comments
      const insertComment = db.prepare(`
        INSERT INTO comments (id, postId, name, email, body)
        VALUES (@id, @postId, @name, @email, @body)
      `);
      for (const c of comments) {
        insertComment.run(c);
      }

      // Seed todos
      const insertTodo = db.prepare(`
        INSERT INTO todos (id, userId, title, completed)
        VALUES (@id, @userId, @title, @completed)
      `);
      for (const t of todos) {
        insertTodo.run(t);
      }

      // Seed books
      const insertBook = db.prepare(`
        INSERT INTO books (id, title, author, genre, year, pages, rating, cover, description)
        VALUES (@id, @title, @author, @genre, @year, @pages, @rating, @cover, @description)
      `);
      for (const b of books) {
        insertBook.run(b);
      }

      console.log('✅ Database seeded successfully!');
    } else {
      // Ensure existing users have API keys (for schema migrations)
      const usersWithoutApiKey = db.prepare('SELECT id FROM users WHERE api_key IS NULL').all();
      if (usersWithoutApiKey.length > 0) {
        const updateApiKey = db.prepare('UPDATE users SET api_key = ? WHERE id = ?');
        for (const u of usersWithoutApiKey) {
          updateApiKey.run(generateApiKey(), u.id);
        }
        console.log(`🔑 Generated API keys for ${usersWithoutApiKey.length} existing users`);
      }
    }
  });

  transaction();
}

function resetDatabase() {
  initSchema();
  seedDatabase(true);
}

// Auto-initialize on import
initSchema();
seedDatabase(false);

module.exports = {
  db,
  initSchema,
  seedDatabase,
  resetDatabase
};
