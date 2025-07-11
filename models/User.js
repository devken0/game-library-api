const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

// password encryption
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // skip hashing if password is already set and unchanged

  const salt = await bcrypt.genSalt(10); // generates random salt
  this.password = await bcrypt.hash(this.password, salt); //hashes the password
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;