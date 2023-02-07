const express = require('express');
const router = express.Router();
const handlerVideogame = require('../handlers/videogame')

router.get('/allVideogame', handlerVideogame.getVideogames)

module.exports = router