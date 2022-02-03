const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("shows", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.ENUM(
        "Comedia",
        "Drama",
        "Tragedia",
        "Tragicomedia",
        "Monologo"
      ),
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
      type: DataTypes.ENUM(
        "Todas las edades",
        "Apta para mayores de 13 años",
        "Apta para mayores de 16 años",
        "Apta para mayores de 18 años",
        "Exhibición condicionada."
      ),
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
