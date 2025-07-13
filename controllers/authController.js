const User = require('../models/User');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/token');
const createError = require('../utils/createError');
const sendResponse = require('../utils/sendResponse');

// Register
exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) return next(createError(400, 'Email already in use'));

    const newUser = new User({ username, email, password });
    await newUser.save();

    return sendResponse(res, 201, {}, 'User registered successfully');
  } catch (err) {
    return next(err);
  }
};

// Login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if user is valid 
    const user = await User.findOne({ email });
    if (!user) return next(createError(400, 'Invalid email or password'));

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return next(createError(400, 'Invalid email or password'));

    // If everything above passes, create token
    const token = generateToken({ userId: user._id });

    return sendResponse(res, 200, { 'token': token }, 'Login successful');
  } catch (err) {
    return next(err);
  }
};
