const { verifyToken } = require('../utils/token');
const createError = require('../utils/createError');

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer'))
    return next(createError(401, 'Unauthorized'));

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verifyToken(token);
    req.user = decoded; 
    next();
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(createError(401, 'Invalid token'));
    }
    return next(err);
  }
}