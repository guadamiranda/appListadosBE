const servicesVideogame = require('../services/videogames')

module.exports = {
    getVideogames: async(req, res) => {
        try{
            const allVideogames = await servicesVideogame.getVideogames()

            res.json({
                success: 'ok',
                allVideogames: allVideogames
            })

        } catch (error){
            console.log('Error in Handler Videogame, in getVideogames')
            console.log(error)
            res.sendStatus(500)
        }
    }
}