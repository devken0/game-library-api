const Game = require(`../models/Game`);

// Create a game
exports.createGame = async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    // 201 status code means the request was successful and a new resource was created
    res.status(201).json(game);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all games
exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a game
exports.updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.status(200).json(game);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a game
exports.deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.status(200).json({ message: 'Game deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Search/filter function
exports.searchGame = async (req, res) => {
  try {
    const { title, genre, platform } = req.query;
    const query = {}; // query object

    // enables case-insensitive search query 
    if (title) query.title = { $regex: title, $options: 'i' }; 
    if (genre) query.genre = genre;
    if (platform) query.platform = platform;

    const games = await Game.find(query);
    res.status(200).json(games);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
