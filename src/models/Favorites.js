const { DataTypes } = require("sequelize")


module.exports = (sequelize) => {
    sequelize.define('Favorites', {
        nameShow: {
            type: DataTypes.STRING,
        }
    })
}