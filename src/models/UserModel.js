const { Sequelize, DataTypes } = require("sequelize");
const database = require("../config/database");

const User = database.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = User;
