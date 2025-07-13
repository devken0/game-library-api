const { body, validationResult } = require('express-validator');
const createError = require('../utils/createError');

const validateGame = [
  body('title').notEmpty().withMessage('Game title is required'),
  body('genre').notEmpty().withMessage('Game genre is required'),
  body('platform').notEmpty().withMessage('Game platform is required'),
  body('releaseYear').isDate().withMessage('Release year must be a number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return next(createError(400, errors.array().map(err => err.msg).join(', ')));
    next();
  }
];

module.exports = validateGame;