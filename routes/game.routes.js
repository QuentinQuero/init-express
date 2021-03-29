var express = require('express');
var router = express.Router();

var gameController = require('../controllers/game.controller')

router.get('/', gameController.getGames);
module.exports = router;
