const { FavoritesViewers } = require("../db");
const api = require("../../db.json")

const getAllFavoritesViewers = async () =>{
    try {
        const allFavoritesViewers = await FavoritesViewers.findAll({});

        if(!allFavoritesViewers.length) {
            const allFavoritesViewersdb = await FavoritesViewers.bulkCreate(api.favoritesViewers)
            return allFavoritesViewersdb
        }
        return allFavoritesViewers
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllFavoritesViewers }