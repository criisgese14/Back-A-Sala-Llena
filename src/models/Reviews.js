const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("reviews", {
    review: {
      type: DataTypes.TEXT,
    },
    score: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
    },
  });
};
