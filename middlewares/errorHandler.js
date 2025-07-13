// Centralized error handler

module.exports = (err, req, res, next) => {
  console.error(err.stack); // logs full error stack trace to the terminal
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
};

