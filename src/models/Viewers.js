const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("theaters", {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING, // ver si no va a ser el email
    },
    password: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.TEXT,
    },
    province: {
      type: DataTypes.ENUM(
        "Buenos Aires",
        "Cordoba",
        "Santa Fe",
        "Catamarca",
        "Chaco",
        "Chubut",
        "Corrientes",
        "Entre Rios",
        "Formosa",
        "Jujuy",
        "La Pampa",
        "La Rioja",
        "Mendoza",
        "Misiones",
        "Neuquen",
        "Rio Negro",
        "Salta",
        "San Juan",
        "San Luis",
        "Santa Cruz",
        "Santiago del Estero",
        "Tierra del Fuego",
        "Tucuman",
        "CABA"
      ),
    },
  });
};
