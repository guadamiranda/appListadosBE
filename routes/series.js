const express = require('express');
const router = express.Router();
const handlerSerie = require('../handlers/series')

router.get('/allSeries', handlerSerie.getSeries)

//router.get('/:idUser/series', handlerSerie.getAllSeries)
//router.get('/:idUser/serie/:idSerie', handlerSerie.getSerie)
//router.put('/:idUser/editserie/:idSerie', handlerSerie.putSerie)
//router.post('/:idUser/addserie', handlerSerie.postSerie)
//router.delete('/:idUser/serie/:idSerie', handlerSerie.deleteSerie)

module.exports = router