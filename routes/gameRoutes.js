const express = require('express');
const router = express.Router();
const controller = require('../controllers/gameController');
const auth = require('../middlewares/authMiddleware');
const validator = require('../middlewares/validateGame');

router.post('/', auth, validator, controller.createGame);
router.get('/', controller.getAllGames);
router.put('/:id', auth, validator, controller.updateGame);
router.delete('/:id', auth, controller.deleteGame);
router.get('/search', controller.searchGames);

module.exports = router;