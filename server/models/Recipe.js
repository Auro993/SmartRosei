const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Recipe = sequelize.define(
  "Recipe",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    ingredients: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT },
    instructions: { type: DataTypes.TEXT },
  },
  {
    tableName: "recipes", // ⚡ must match MySQL table exactly
    timestamps: true,
  }
);

module.exports = Recipe;