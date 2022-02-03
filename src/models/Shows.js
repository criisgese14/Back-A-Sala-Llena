const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("shows", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING, //ENUM Ale pasa los generos
      allowNull: false,
    },
    length: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ticketsQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rated: {
      type: DataTypes.ENUM("G", "PG", "PG-13", "R", "NC-17"),
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
    },
  });
};
