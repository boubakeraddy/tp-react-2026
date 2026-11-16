const express = require('express');
const router = express.Router();
const { db, resetDatabase } = require('../db/database');

// POST or GET /api/reset - endpoint to reset database back to initial seed data
router.all('/api/reset', (req, res) => {
  try {
    resetDatabase();
    if (req.headers.accept && req.headers.accept.includes('text/html')) {
      return res.redirect('/?reset=success');
    }
    res.json({ success: true, message: 'Database reset to initial sample data successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET / - Interactive Developer Dashboard & API Explorer
router.get('/', (req, res) => {
  const userCount = db.prepare('SELECT COUNT(*) as count FROM users').get().count;
  const postCount = db.prepare('SELECT COUNT(*) as count FROM posts').get().count;
  const commentCount = db.prepare('SELECT COUNT(*) as count FROM comments').get().count;
  const todoCount = db.prepare('SELECT COUNT(*) as count FROM todos').get().count;
  const bookCount = db.prepare('SELECT COUNT(*) as count FROM books').get().count;

  const resetSuccess = req.query.reset === 'success';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Backend API</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0b0f19;
      --card-bg: #111827;
      --card-border: #1f293d;
      --accent-blue: #3b82f6;
      --accent-indigo: #6366f1;
      --accent-purple: #8b5cf6;
      --accent-emerald: #10b981;
      --accent-pink: #ec4899;
      --accent-amber: #f59e0b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg);
      color: var(--text-main);
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      line-height: 1.6;
      padding: 2.5rem 1.5rem;
    }
    .container { max-width: 1040px; margin: 0 auto; }
    header {
      margin-bottom: 2.5rem;
      border-bottom: 1px solid var(--card-border);
      padding-bottom: 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem;
    }
    .brand h1 {
      font-size: 2.2rem;
      font-weight: 800;
      background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.03em;
    }
    .brand p { color: var(--text-muted); font-size: 1.05rem; margin-top: 0.35rem; }
    .badge-online {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(16, 185, 129, 0.12);
      border: 1px solid rgba(16, 185, 129, 0.35);
      color: #34d399;
      padding: 0.4rem 0.9rem;
      border-radius: 9999px;
      font-size: 0.88rem;
      font-weight: 600;
    }
    .pulse-dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: #10b981;
      box-shadow: 0 0 10px #10b981;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.25); }
    }
    .alert-banner {
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid #10b981;
      color: #34d399;
      padding: 0.85rem 1.25rem;
      border-radius: 10px;
      margin-bottom: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
      gap: 1.25rem;
      margin-bottom: 3rem;
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 14px;
      padding: 1.4rem;
      transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .card:hover {
      transform: translateY(-3px);
      border-color: #38bdf8;
      box-shadow: 0 12px 24px -10px rgba(0,0,0,0.5);
    }
    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
    }
    .card-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #fff;
    }
    .count-badge {
      background: rgba(255, 255, 255, 0.08);
      color: #cbd5e1;
      padding: 0.2rem 0.65rem;
      border-radius: 6px;
      font-size: 0.82rem;
      font-weight: 600;
    }
    .card-desc {
      color: var(--text-muted);
      font-size: 0.92rem;
      margin-bottom: 1.25rem;
      flex-grow: 1;
    }
    .endpoint-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid var(--card-border);
      padding: 0.6rem 0.85rem;
      border-radius: 8px;
      color: #38bdf8;
      text-decoration: none;
      font-family: 'Fira Code', monospace;
      font-size: 0.88rem;
      transition: background 0.2s, color 0.2s;
    }
    .endpoint-link:hover {
      background: #1e293b;
      color: #7dd3fc;
    }
    .avatar-preview-box {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      padding: 1.5rem;
      border-radius: 14px;
      margin-bottom: 3rem;
    }
    .avatar-imgs {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }
    .avatar-imgs img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: #1e293b;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      transition: transform 0.2s;
    }
    .avatar-imgs img:hover {
      transform: scale(1.15) rotate(5deg);
    }
    .avatar-info h3 { font-size: 1.15rem; margin-bottom: 0.35rem; }
    .avatar-info p { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.75rem; }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.55rem 1.1rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.88rem;
      cursor: pointer;
      border: none;
      transition: opacity 0.2s, transform 0.1s;
      text-decoration: none;
    }
    .btn:hover { opacity: 0.9; transform: translateY(-1px); }
    .btn-primary { background: linear-gradient(135deg, #3b82f6, #6366f1); color: #fff; }
    .btn-danger { background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.4); color: #f87171; }
    .btn-danger:hover { background: rgba(239, 68, 68, 0.25); color: #fca5a5; }
    .section-title {
      font-size: 1.45rem;
      font-weight: 700;
      margin-bottom: 1.25rem;
      color: #f1f5f9;
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }
    pre {
      background: #060913;
      border: 1px solid var(--card-border);
      border-radius: 10px;
      padding: 1.2rem;
      font-family: 'Fira Code', monospace;
      font-size: 0.88rem;
      overflow-x: auto;
      color: #e2e8f0;
      margin-bottom: 2rem;
    }
    code .keyword { color: #f472b6; }
    code .string { color: #a7f3d0; }
    code .comment { color: #64748b; }
    code .fn { color: #60a5fa; }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 2.5rem;
      background: var(--card-bg);
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid var(--card-border);
    }
    th, td {
      padding: 0.85rem 1.1rem;
      text-align: left;
      font-size: 0.9rem;
      border-bottom: 1px solid var(--card-border);
    }
    th {
      background: rgba(255,255,255,0.03);
      color: #94a3b8;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.78rem;
      letter-spacing: 0.05em;
    }
    td code {
      font-family: 'Fira Code', monospace;
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.1);
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
      font-size: 0.82rem;
    }
    footer {
      margin-top: 3.5rem;
      border-top: 1px solid var(--card-border);
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      color: var(--text-muted);
      font-size: 0.88rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="brand">
        <h1>Backend API</h1>
        <p>Simple, local SQLite-powered mock API with dynamic SVG avatars</p>
      </div>
      <div>
        <span class="badge-online">
          <span class="pulse-dot"></span> Online (Port 5000)
        </span>
      </div>
    </header>

    ${resetSuccess ? `
      <div class="alert-banner">
        <span>✅ Database was successfully reset to initial seed data!</span>
        <a href="/" style="color:inherit; text-decoration:none; font-weight:700;">✕</a>
      </div>
    ` : ''}

    <div class="avatar-preview-box">
      <div class="avatar-imgs" id="avatarPreviewContainer">
        <img src="/avatars/1.svg" alt="Avatar 1">
        <img src="/avatars/2.svg" alt="Avatar 2">
        <img src="/avatars/3.svg" alt="Avatar 3">
        <img src="/avatars/4.svg" alt="Avatar 4">
        <img src="/avatars/random" id="dynamicRandomAvatar" alt="Random Avatar">
      </div>
      <div class="avatar-info" style="margin-left: auto;">
        <h3>Dynamic SVG Avatars</h3>
        <p>100% offline, lightweight, deterministic per seed or randomly generated.</p>
        <button class="btn btn-primary" onclick="refreshRandomAvatar()">
          🎲 Roll New Avatar
        </button>
      </div>
    </div>

    <h2 class="section-title">📦 Resources Available</h2>
    <div class="grid">
      <!-- Users -->
      <div class="card">
        <div>
          <div class="card-header">
            <span class="card-title">Users</span>
            <span class="count-badge">${userCount} items</span>
          </div>
          <p class="card-desc">JSONPlaceholder compatible user objects with addresses, companies, and an added <strong>avatar</strong> URL.</p>
        </div>
        <a href="/users" target="_blank" class="endpoint-link">
          <span>GET /users</span>
          <span>↗</span>
        </a>
      </div>

      <!-- Books -->
      <div class="card">
        <div>
          <div class="card-header">
            <span class="card-title">Books</span>
            <span class="count-badge">${bookCount} items</span>
          </div>
          <p class="card-desc">Curated books collection with title, author, genre, year, pages, rating, cover, and description.</p>
        </div>
        <a href="/books" target="_blank" class="endpoint-link">
          <span>GET /books</span>
          <span>↗</span>
        </a>
      </div>

      <!-- Posts -->
      <div class="card">
        <div>
          <div class="card-header">
            <span class="card-title">Posts</span>
            <span class="count-badge">${postCount} items</span>
          </div>
          <p class="card-desc">Blog posts authored by users. Supports relations like <code>/users/1/posts</code> and <code>/posts/1/comments</code>.</p>
        </div>
        <a href="/posts" target="_blank" class="endpoint-link">
          <span>GET /posts</span>
          <span>↗</span>
        </a>
      </div>

      <!-- Comments -->
      <div class="card">
        <div>
          <div class="card-header">
            <span class="card-title">Comments</span>
            <span class="count-badge">${commentCount} items</span>
          </div>
          <p class="card-desc">Post comments with commenter name, email, and message body.</p>
        </div>
        <a href="/comments" target="_blank" class="endpoint-link">
          <span>GET /comments</span>
          <span>↗</span>
        </a>
      </div>

      <!-- Todos -->
      <div class="card">
        <div>
          <div class="card-header">
            <span class="card-title">Todos</span>
            <span class="count-badge">${todoCount} items</span>
          </div>
          <p class="card-desc">Todo items with boolean completion state. Great for interactive React todo apps!</p>
        </div>
        <a href="/todos" target="_blank" class="endpoint-link">
          <span>GET /todos</span>
          <span>↗</span>
        </a>
      </div>

      <!-- Avatars -->
      <div class="card">
        <div>
          <div class="card-header">
            <span class="card-title">Random Avatar</span>
            <span class="count-badge">SVG Vector</span>
          </div>
          <p class="card-desc">Endpoint delivering fresh random SVG avatars on every call. Use anywhere with <code>&lt;img src="..."&gt;</code>.</p>
        </div>
        <a href="/avatars/random" target="_blank" class="endpoint-link">
          <span>GET /avatars/random</span>
          <span>↗</span>
        </a>
      </div>
    </div>

    <h2 class="section-title">⚡ Supported Query Parameters</h2>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Example Query</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Filtering</strong></td>
          <td><code>/posts?userId=1</code><br><code>/todos?completed=true</code><br><code>/books?genre=Science+Fiction</code></td>
          <td>Filter collection by exact field values.</td>
        </tr>
        <tr>
          <td><strong>Full-Text Search</strong></td>
          <td><code>/books?q=javascript</code><br><code>/users?q=graham</code></td>
          <td>Searches across relevant text fields.</td>
        </tr>
        <tr>
          <td><strong>Sorting</strong></td>
          <td><code>/posts?_sort=title&_order=asc</code><br><code>/books?_sort=rating&_order=desc</code></td>
          <td>Sort by any column ascending (asc) or descending (desc).</td>
        </tr>
        <tr>
          <td><strong>Pagination</strong></td>
          <td><code>/posts?_limit=5&_page=1</code></td>
          <td>Paginate results. Returns <code>X-Total-Count</code> header.</td>
        </tr>
      </tbody>
    </table>

    

    <footer>
      <div>React Course API • Powered by Express & SQLite (better-sqlite3)</div>
      <form action="/api/reset" method="POST" onsubmit="return confirm('Reset all data back to initial seed values?');">
        <button type="submit" class="btn btn-danger">↺ Reset Database</button>
      </form>
    </footer>
  </div>

  <script>
    function refreshRandomAvatar() {
      const img = document.getElementById('dynamicRandomAvatar');
      img.src = '/avatars/random?t=' + Date.now();
    }
  </script>
</body>
</html>`;

  res.send(html);
});

module.exports = router;
