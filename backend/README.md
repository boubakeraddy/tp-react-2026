# 🎓 React Course Backend API

A lightweight, zero-configuration local REST API designed specifically for students in React courses. Built with **Node.js**, **Express**, and **SQLite (`better-sqlite3`)**.

---

## ⚡ Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

The server will automatically start on `http://localhost:5000` with hot-reloading (`--watch`). Open `http://localhost:5000` in your browser to view the interactive API Explorer and live avatar playground!

---

## 📦 Available Resources

| Resource | Endpoint | Description |
|---|---|---|
| **Users** | [`GET /users`](http://localhost:5000/users) | 10 users in JSONPlaceholder format with address, company, and **avatar** |
| **Books** | [`GET /books`](http://localhost:5000/books) | 16 curated books with author, genre, rating, cover, and description |
| **Posts** | [`GET /posts`](http://localhost:5000/posts) | 30 blog posts written by users |
| **Comments** | [`GET /comments`](http://localhost:5000/comments) | 50 comments on posts with name, email, and body |
| **Todos** | [`GET /todos`](http://localhost:5000/todos) | 30 todo items with boolean `completed` state |
| **Avatars** | [`GET /avatars/random`](http://localhost:5000/avatars/random) | 100% offline, dynamic SVG avatar generator |

---

## 👤 User Format (JSONPlaceholder + Avatar)

Every user object matches the exact structure of [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) with an additional **`avatar`** field:

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "avatar": "http://localhost:5000/avatars/1.svg",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```

---

## 🎭 Random & Custom Avatar Endpoints

Avatars are generated dynamically on the fly as crisp vector SVGs (zero external APIs needed, 100% offline):

- **Random Avatar**:
  ```http
  GET /avatars/random
  ```
  Returns a new random SVG avatar on every request.

- **Deterministic Avatar by Seed / ID**:
  ```http
  GET /avatars/1.svg
  GET /avatars/Bret
  ```
  Returns the exact same avatar every time for that user or seed.

- **Query Options**:
  - `?size=256` (default: 128)
  - `?gender=boy` or `?gender=girl`

---

## 🛠️ Complete REST Endpoints

All collections support full CRUD operations that persist to the local SQLite database.

### Users
- `GET /users` - List all users
- `GET /users/:id` - Get user by ID
- `GET /users/:id/posts` - Get all posts by user
- `GET /users/:id/todos` - Get all todos by user
- `POST /users` - Create user (`email` must be unique)
- `PUT /users/:id` - Update user (full, `email` must be unique)
- `PATCH /users/:id` - Update user (partial, `email` must be unique)
- `DELETE /users/:id` - Delete user

### Books
- `GET /books` - List all books
- `GET /books/:id` - Get book by ID
- `POST /books` - Create book
- `PUT /books/:id` - Update book
- `PATCH /books/:id` - Update book (partial)
- `DELETE /books/:id` - Delete book

### Posts
- `GET /posts` - List all posts
- `GET /posts/:id` - Get post by ID
- `GET /posts/:id/comments` - Get comments for post
- `POST /posts` - Create post
- `PUT /posts/:id` - Update post
- `PATCH /posts/:id` - Update post (partial)
- `DELETE /posts/:id` - Delete post

### Comments
- `GET /comments` - List all comments
- `GET /comments/:id` - Get comment by ID
- `POST /comments` - Create comment
- `PUT /comments/:id` - Update comment
- `PATCH /comments/:id` - Update comment (partial)
- `DELETE /comments/:id` - Delete comment

### Todos
- `GET /todos` - List all todos
- `GET /todos/:id` - Get todo by ID
- `POST /todos` - Create todo
- `PUT /todos/:id` - Update todo
- `PATCH /todos/:id` - Update todo (e.g. toggle `{ completed: true }`)
- `DELETE /todos/:id` - Delete todo

---

## 🔍 Query Parameters: Filter, Search, Sort & Paginate

- **Filtering**:
  - `GET /posts?userId=1`
  - `GET /todos?completed=true`
  - `GET /books?genre=Computer+Science`
- **Full-Text Search**:
  - `GET /books?q=javascript`
  - `GET /users?q=leanne`
- **Sorting**:
  - `GET /books?_sort=rating&_order=desc`
  - `GET /posts?_sort=title&_order=asc`
- **Pagination**:
  - `GET /posts?_limit=10&_page=1` (returns `X-Total-Count` header)

---

## 🔄 Resetting the Database

If students make changes during exercises and want to restore the clean initial data:

```bash
npm run db:reset
```
Or click the **"Reset Database"** button in the web dashboard at `http://localhost:5000/`.

---

## ⚛️ React Integration Examples

### Fetching and Displaying Users with Avatars
```jsx
import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      {users.map(user => (
        <div key={user.id} style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
          <img src={user.avatar} alt={user.name} width={64} height={64} />
          <h3>{user.name}</h3>
          <p>@{user.username}</p>
          <p>{user.email}</p>
          <small>{user.company.name}</small>
        </div>
      ))}
    </div>
  );
}
```

### Toggling a Todo
```jsx
function toggleTodo(id, currentStatus) {
  fetch(`http://localhost:5000/todos/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: !currentStatus })
  })
  .then(res => res.json())
  .then(updatedTodo => {
    console.log('Todo updated:', updatedTodo);
  });
}
```

---

## 📜 Available NPM Scripts

- `npm run dev` — Starts server in watch mode (`node --watch src/server.js`)
- `npm start` — Starts server in normal mode
- `npm test` — Runs automated API endpoint verification tests
- `npm run db:reset` — Resets SQLite database to original sample data
