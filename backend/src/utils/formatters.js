function getBaseUrl(req) {
  if (!req) return 'http://localhost:5000';
  const protocol = req.protocol || 'http';
  const host = req.get('host') || 'localhost:5000';
  return `${protocol}://${host}`;
}

function resolveAvatarUrl(avatarPath, req) {
  if (!avatarPath) return null;
  if (avatarPath.startsWith('http://') || avatarPath.startsWith('https://')) {
    return avatarPath;
  }
  const baseUrl = getBaseUrl(req);
  return `${baseUrl}${avatarPath.startsWith('/') ? '' : '/'}${avatarPath}`;
}

function formatUser(row, req) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    username: row.username,
    email: row.email,
    avatar: resolveAvatarUrl(row.avatar || `/avatars/${row.id}.svg`, req),
    address: {
      street: row.street || '',
      suite: row.suite || '',
      city: row.city || '',
      zipcode: row.zipcode || '',
      geo: {
        lat: row.lat || '',
        lng: row.lng || ''
      }
    },
    phone: row.phone || '',
    website: row.website || '',
    company: {
      name: row.companyName || '',
      catchPhrase: row.companyCatchPhrase || '',
      bs: row.companyBs || ''
    }
  };
}

function formatTodo(row) {
  if (!row) return null;
  return {
    id: row.id,
    userId: row.userId,
    title: row.title,
    completed: Boolean(row.completed)
  };
}

module.exports = {
  getBaseUrl,
  resolveAvatarUrl,
  formatUser,
  formatTodo
};
