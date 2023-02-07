const express = require('express');
const router = express.Router();
const handlerVideogame = require('../handlers/videogame')

router.get('/allVideogames', handlerVideogame.getVideogames)

module.exports = router