const express = require('express');
const router = express.Router();
const bookRoutes = require('./book')
const movieRoutes = require('./movies')
const serieRoutes = require('./series')
const videogameRoutes = require('./videogame')

router.use('/book', bookRoutes)
router.use('/movie', movieRoutes)
router.use('/serie', serieRoutes)
router.use('/videogame', videogameRoutes)

module.exports = router