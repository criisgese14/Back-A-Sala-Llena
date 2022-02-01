const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("shows", {
    name: {
      type: DataTypes.STRING,
    },
    genere: {
      type: DataTypes.STRING,
    },
    length: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.TEXT,
    },
    summary: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER, //Ver si el precio va a la entrada o al show
    },
    ticketsQty: {
      type: DataTypes.INTEGER,
    },
    rated: {
      type: DataTypes.ENUM("G", "PG", "PG-13", "R", "NC-17"),
    },
    date: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
    },
  });
};
