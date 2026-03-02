const Recipe = require("../models/Recipe");
const sequelize = require("../config/db");

const seedData = async () => {
  await sequelize.sync({ force: true });

  await Recipe.bulkCreate([
    { name: "Vegetable Khichdi", ingredients: "rice,dal" },
    { name: "Paneer Curry", ingredients: "paneer,tomato,onion" },
    { name: "Fried Rice", ingredients: "rice,vegetables" }
  ]);

  console.log("🌱 Recipes seeded");
  process.exit();
};

seedData();
