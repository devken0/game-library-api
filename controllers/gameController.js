const Game = require(`../models/Game`);
const createError = require('../utils/createError');
const sendResponse = require('../utils/sendResponse');

// Create a game
exports.createGame = async (req, res, next) => {
  try {
    const game = new Game(req.body);
    await game.save();
    // 201 status code means the request was successful and a new resource was created
    return sendResponse(res, 201, game, 'Game added successfully');
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(createError(400, err.message));
    }
    return next(err);
  }
};

// Get all games
exports.getAllGames = async (req, res, next) => {
  try {
    const games = await Game.find();
    return sendResponse(res, 200, games, '');
  } catch (err) {
    return next(err);
  }
};

// Update a game
exports.updateGame = async (req, res, next) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!game) return next(createError(404, 'Game not found'));
    return sendResponse(res, 200, game, 'Game updated successfully')
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(createError(400, err.message));
    }
    return next(err);
  }
};

// Delete a game
exports.deleteGame = async (req, res, next) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) return next(createError(404, 'Game not found'));
    return sendResponse(res, 200, {}, 'Game deleted successfully');
  } catch (err) {
    return next(err);
  }
};

// Search/filter function
exports.searchGame = async (req, res, next) => {
  try {
    const { title, genre, platform } = req.query;
    const query = {}; // query object

    // enables case-insensitive search query 
    if (title) query.title = { $regex: title, $options: 'i' }; 
    if (genre) query.genre = { $regex: genre, $options: 'i' };
    if (platform) query.platform = { $regex: platform, $options: 'i' };

    const games = await Game.find(query);
    return sendResponse(res, 200, games, 'Search game successful');

  } catch (err) {
    return next(err);
  }
}
