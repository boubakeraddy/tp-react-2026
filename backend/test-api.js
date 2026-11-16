const http = require('http');
const app = require('./src/server');

const server = app.listen(5099, async () => {
  console.log('Testing server started on port 5099...');

  function request(path, options = {}) {
    return new Promise((resolve, reject) => {
      const req = http.request({
        hostname: 'localhost',
        port: 5099,
        path,
        method: options.method || 'GET',
        headers: options.headers || {}
      }, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          let json = null;
          try { json = JSON.parse(body); } catch (_) {}
          resolve({ status: res.statusCode, headers: res.headers, body, json });
        });
      });
      req.on('error', reject);
      if (options.data) {
        req.write(typeof options.data === 'string' ? options.data : JSON.stringify(options.data));
      }
      req.end();
    });
  }

  try {
    // 1. Test /users
    const usersRes = await request('/users');
    console.log(`[PASS] GET /users: Status ${usersRes.status}, count = ${usersRes.json.length}`);
    if (usersRes.json.length !== 10) throw new Error('Expected 10 users');
    const u1 = usersRes.json[0];
    if (!u1.avatar || !u1.address || !u1.company) throw new Error('User format missing avatar/address/company');
    console.log(`       User 1: ${u1.name}, avatar = ${u1.avatar}`);

    // 2. Test /books
    const booksRes = await request('/books');
    console.log(`[PASS] GET /books: Status ${booksRes.status}, count = ${booksRes.json.length}`);
    if (booksRes.json.length !== 16) throw new Error('Expected 16 books');

    // 3. Test /posts and relation /posts/1/comments
    const postsRes = await request('/posts?userId=1');
    console.log(`[PASS] GET /posts?userId=1: Status ${postsRes.status}, count = ${postsRes.json.length}`);
    const commentsRes = await request('/posts/1/comments');
    console.log(`[PASS] GET /posts/1/comments: Status ${commentsRes.status}, count = ${commentsRes.json.length}`);

    // 4. Test /todos and PATCH
    const todoPatchRes = await request('/todos/1', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      data: { completed: true }
    });
    console.log(`[PASS] PATCH /todos/1: Status ${todoPatchRes.status}, completed = ${todoPatchRes.json.completed}`);
    if (todoPatchRes.json.completed !== true) throw new Error('Todo patch failed');

    // 5. Test /avatars/random
    const avatarRandomRes = await request('/avatars/random');
    console.log(`[PASS] GET /avatars/random: Status ${avatarRandomRes.status}, contentType = ${avatarRandomRes.headers['content-type']}`);
    if (!avatarRandomRes.body.includes('<svg')) throw new Error('Avatar random does not return SVG');

    // 6. Test /avatars/1.svg
    const avatar1Res = await request('/avatars/1.svg');
    console.log(`[PASS] GET /avatars/1.svg: Status ${avatar1Res.status}, contentType = ${avatar1Res.headers['content-type']}`);
    if (!avatar1Res.body.includes('<svg')) throw new Error('Avatar 1 does not return SVG');

    // 7. Test POST /users with unique email
    const newUserRes = await request('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: {
        name: 'Sara Connor',
        email: 'sara@sky.net',
        company: { name: 'Cyberdyne' }
      }
    });
    console.log(`[PASS] POST /users (unique email): Status ${newUserRes.status}, id = ${newUserRes.json.id}, avatar = ${newUserRes.json.avatar}`);
    if (newUserRes.status !== 201) throw new Error('Failed to create user with unique email');

    // 8. Test POST /users with duplicate email (should be rejected)
    const duplicatePostRes = await request('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: {
        name: 'Imposter',
        email: 'sara@sky.net'
      }
    });
    console.log(`[PASS] POST /users (duplicate email rejection): Status ${duplicatePostRes.status}, error = "${duplicatePostRes.json.error}"`);
    if (duplicatePostRes.status !== 400 || duplicatePostRes.json.error !== 'Email already exists') {
      throw new Error(`Expected 400 'Email already exists', got status ${duplicatePostRes.status}`);
    }

    // 9. Test PATCH /users/:id with another user's email (should be rejected)
    const duplicatePatchRes = await request(`/users/1`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      data: { email: 'sara@sky.net' }
    });
    console.log(`[PASS] PATCH /users/:id (duplicate email rejection): Status ${duplicatePatchRes.status}, error = "${duplicatePatchRes.json.error}"`);
    if (duplicatePatchRes.status !== 400 || duplicatePatchRes.json.error !== 'Email already exists') {
      throw new Error(`Expected 400 'Email already exists' on PATCH, got status ${duplicatePatchRes.status}`);
    }

    // 10. Test PATCH /users/:id with user's own email (should succeed)
    const selfPatchRes = await request(`/users/1`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      data: { email: 'Sincere@april.biz' }
    });
    console.log(`[PASS] PATCH /users/:id (own email update): Status ${selfPatchRes.status}`);
    if (selfPatchRes.status !== 200) throw new Error('Failed to update user with own email');

    // 11. Test /api/reset
    const resetRes = await request('/api/reset', { method: 'POST' });
    console.log(`[PASS] POST /api/reset: Status ${resetRes.status}, message = ${resetRes.json.message}`);

    console.log('\n🎉 ALL TESTS PASSED SUCCESSFULLY!\n');
  } catch (err) {
    console.error('❌ Test failed:', err);
    process.exitCode = 1;
  } finally {
    server.close();
    process.exit();
  }
});
