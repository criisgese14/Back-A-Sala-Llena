const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("tickets", {
    seatNumber: {
      type: DataTypes.STRING,
    }, // ver si falta el precio
  });
};
