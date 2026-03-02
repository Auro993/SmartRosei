const Recipe = require("../models/Recipe");

const recipesData = [
  {
    name: "Paneer Butter Masala",
    ingredients: "Paneer, Butter, Cream, Tomato, Spices",
    description: "Delicious paneer curry",
    instructions: "Cook paneer with butter and spices..."
  },
  {
    name: "Veg Biryani",
    ingredients: "Rice, Vegetables, Spices, Ghee",
    description: "Aromatic vegetable biryani",
    instructions: "Cook rice and vegetables with spices..."
  },
];

module.exports = async () => {
  try {
    await Recipe.bulkCreate(recipesData);
    console.log("🌱 Recipes seeded");
  } catch (err) {
    console.error("❌ Seeding error:", err);
  }
};