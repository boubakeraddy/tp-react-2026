const { verifyAccessToken } = require('./token');

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: 'Authentication required',
      message: 'Authorization header is missing'
    });
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({
      error: 'Invalid authorization format',
      message: 'Authorization header must be: Bearer <token>'
    });
  }

  const token = parts[1];
  const decoded = verifyAccessToken(token);

  if (!decoded) {
    return res.status(401).json({
      error: 'Invalid or expired token',
      message: 'The provided access token is invalid or has expired'
    });
  }

  req.user = decoded;
  next();
}

function optionalVerifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next();
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return next();
  }

  const token = parts[1];
  const decoded = verifyAccessToken(token);

  if (decoded) {
    req.user = decoded;
  }

  next();
}

module.exports = {
  verifyToken,
  optionalVerifyToken
};