const express = require('express');
const router = express.Router();
const videogameRoutes = require('./videogame')

router.use('/videogame', videogameRoutes)

module.exports = router