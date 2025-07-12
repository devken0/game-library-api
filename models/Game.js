const mongoose = require('mongoose');

// Creates the document model for games
const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  platform: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  description: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Game', gameSchema);
