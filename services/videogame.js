
const allVideogamesMocked = [{
    name: "Hades",
    description: "Game",
    platform: "PC",
    url: "https://media.wired.com/photos/5f6cf5ec6f32a729dc0b3a89/master/w_1600%2Cc_limit/Culture_inline_Hades_PackArt.jpg"
}]

module.exports = {
    getVideogames: async () => {
        const allVideogames = allVideogamesMocked
        return allVideogames
    }
}
