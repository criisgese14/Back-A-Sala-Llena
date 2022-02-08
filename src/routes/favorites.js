const Favorites = require("../db");
const Viewers = require("../models/Viewers");

const router = require("express").Router();

router.get('/', async (req, res) => {
    const favorites = await Favorites.findAll()

    res.send(favorites)
})

router.post('/:idViewer', async (req, res) => {
    const {idViewer} = req.params
    
    const {id, nameShow} = req.body;
    
    const addFavorites = await Favorites.create({nameShow})
    
    const viewer = await Viewers.findOne({
        where: {
            id: idViewer
        }
    })

    await viewer.addFavorites(addFavorites)

    res.send(addFavorites)

})

module.exports = router;