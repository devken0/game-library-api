const express = require('express');
const router = express.Router();
const controller = require('../controllers/gameController');
const auth = require('../middlewares/authMiddleware');
const { validateGame, validateGameUpdate } = require('../middlewares/validateGame');

router.post('/', auth, validateGame, controller.createGame);
router.get('/', controller.getAllGames);
router.put('/:id', auth, validateGameUpdate, controller.updateGame);
router.delete('/:id', auth, controller.deleteGame);
router.get('/search', controller.searchGame);

module.exports = router;