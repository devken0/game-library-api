module.exports = (req, res, next) => {
  // prints API calls in the console/terminal
  console.log(`${req.method} ${req.originalUrl}`);
  next();
};