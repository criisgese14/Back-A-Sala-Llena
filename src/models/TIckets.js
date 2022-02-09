const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("tickets", {
    seatNumber: {
      type: DataTypes.ENUM("Platea", "General", "Palco"),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
