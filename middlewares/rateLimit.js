const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 60 * 1000, // time window in milliseconds. 60 * 1000 = 1 min
  max: 30, // each IP can make up to 30 requests per minute
  message: 'Too many requests, please try again later.'
});

module.exports = limiter;