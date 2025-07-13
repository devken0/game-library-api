const { body, validationResult } = require('express-validator');
const createError = require('../utils/createError');

const validateGame = [
  body('title').notEmpty().withMessage('Game title is required'),
  body('genre').notEmpty().withMessage('Game genre is required'),
  body('platform').notEmpty().withMessage('Game platform is required'),
  body('releaseYear').isNumeric().withMessage('Release year must be a number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(err => err.msg).join(', ');
      return next(createError(400, errorMessages));
    }
    next();
  }
];

const validateGameUpdate = [
  body('title').optional().notEmpty().withMessage('Game title cannot be empty'),
  body('genre').optional().notEmpty().withMessage('Game genre cannot be empty'),
  body('platform').optional().notEmpty().withMessage('Game platform cannot be empty'),
  body('releaseYear').optional().isNumeric().withMessage('Release year must be a number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(err => err.msg).join(', ');
      return next(createError(400, errorMessages));
    }
    next();
  }
];

module.exports = { validateGame, validateGameUpdate };