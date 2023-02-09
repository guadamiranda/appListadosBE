
const allSeriesMocked = [
    {
        name: "The Witcher",
        description: "Season 1",
        platform: "Netflix",
        url: "https://flxt.tmsimg.com/assets/p17580215_b_v13_ac.jpg"
    },
    {
        name: "Game of Thrones",
        description: "Season 1",
        platform: "HBO +",
        url: "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_560,w_850/https%3A%2F%2Ffansided.com%2Ffiles%2F2016%2F05%2FNed-Stark-850x560.jpg"
    },
    {
        name: "Game of Thrones",
        description: "Season 2",
        platform: "HBO +",
        url: "https://http2.mlstatic.com/D_NQ_NP_855000-MLA28158746170_092018-O.jpg"
    },
    {
        name: "Arcane",
        description: "Season 1",
        platform: "Netflix",
        url: "https://phantom-marca.unidadeditorial.es/c1f1d3e8369c9f3793f9c1562fda4f52/resize/1320/f/jpg/assets/multimedia/imagenes/2021/11/08/16363724206689.jpg"
    },
    {
        name: "You",
        description: "Season 1",
        platform: "Netflix",
        url: "https://upload.wikimedia.org/wikipedia/en/c/c6/You_Season_1.jpg"
    },
]

module.exports = {
    getSeries: async () => {
        const allSeries = allSeriesMocked
        return allSeries
    }
}
