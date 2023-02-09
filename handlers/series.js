const servicesSeries = require('../services/series')

module.exports = {
    getSeries: async(req, res) => {
        try{
            const allSeries = await servicesSeries.getSeries()

            res.json({
                success: 'ok',
                allSeries: allSeries
            })

        } catch (error){
            console.log('Error in Handler Series, in getSeries')
            console.log(error)
            res.sendStatus(500)
        }
    }
}