const express = require('express');
const router = express.Router();
const handlerVideogame = require('../handlers/videogame')

router.get('/allVideogames', handlerVideogame.getVideogames)

//router.get('/:idUser/videogames', handlerVideogame.getAllVideogames)
//router.get('/:idUser/videogames/:idVideogame', handlerVideogame.getVideogame)
//router.put('/:idUser/editvideogame/:idVideogame', handlerVideogame.putVideogame)
//router.post('/:idUser/addvideogame', handlerVideogame.postVideogame)
//router.delete('/:idUser/deletevideogame/:idVideogame', handlerVideogame.deleteVideogame)

module.exports = router