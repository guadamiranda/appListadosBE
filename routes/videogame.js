const express = require('express');
const router = express.Router();
const handlerVideogame = require('../handlers/videogame')

router.get('/allVideogames', handlerVideogame.getVideogames)

//router.get('/:idUser/videogames', handlerVideogame.getVideogames)
//router.put('/:idUser/editvideogame/:idVideogame', handlerVideogame.putVideogames)
//router.post('/:idUser/addvideogame', handlerVideogame.postVideogames)
//router.delete('/:idUser/deletevideogame/:idVideogame', handlerVideogame.deleteVideogames)

module.exports = router