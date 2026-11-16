const express = require('express');
const cors = require('cors');
const { PORT } = require('./config');

// Import routes (v1 - public, no auth)
const docsRouter = require('./routes/docs');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const todosRouter = require('./routes/todos');
const booksRouter = require('./routes/books');
const avatarsRouter = require('./routes/avatars');

// Import routes (v2 - Bearer token auth required)
const v2Router = require('./routes/v2');
const authRouter = require('./routes/auth');

const app = express();

// Enable CORS for any frontend origin (React, Vite, Next, etc.)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['X-Total-Count']
}));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register v1 routes (public, no authentication)
app.use('/avatars', avatarsRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);
app.use('/todos', todosRouter);
app.use('/books', booksRouter);
app.use('/', docsRouter);

// Register v2 routes (Bearer token authentication required)
app.use('/api/v2/auth', authRouter);
app.use('/api/v2', v2Router);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    requestedUrl: req.originalUrl,
    availableEndpoints: [
      '/users',
      '/books',
      '/posts',
      '/comments',
      '/todos',
      '/avatars/random',
      '/api/v2/auth/token',
      '/api/v2/auth/refresh',
      '/api/v2/users',
      '/api/v2/posts',
      '/api/v2/comments',
      '/api/v2/todos',
      '/api/v2/books',
      '/api/v2/avatars/random',
      '/api/v2/health'
    ]
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`
  🚀 React Course Backend API is running!
  --------------------------------------------------
  🌐 Dashboard:            http://localhost:${PORT}/
  👤 Users (v1):           http://localhost:${PORT}/users
  📚 Books (v1):           http://localhost:${PORT}/books
  📝 Posts (v1):           http://localhost:${PORT}/posts
  💬 Comments (v1):        http://localhost:${PORT}/comments
  ✅ Todos (v1):           http://localhost:${PORT}/todos
  🎭 Random Avatar (v1):   http://localhost:${PORT}/avatars/random
  --------------------------------------------------
  🔐 Auth (v2):            http://localhost:${PORT}/api/v2/auth/token
  🔄 Refresh (v2):         http://localhost:${PORT}/api/v2/auth/refresh
  👤 Users (v2):           http://localhost:${PORT}/api/v2/users
  📚 Books (v2):           http://localhost:${PORT}/api/v2/books
  📝 Posts (v2):           http://localhost:${PORT}/api/v2/posts
  💬 Comments (v2):        http://localhost:${PORT}/api/v2/comments
  ✅ Todos (v2):           http://localhost:${PORT}/api/v2/todos
  🎭 Random Avatar (v2):   http://localhost:${PORT}/api/v2/avatars/random
  🩺 Health (v2):          http://localhost:${PORT}/api/v2/health
  --------------------------------------------------
  💾 Database:             SQLite (data/database.sqlite)
  `);
});

module.exports = app;
