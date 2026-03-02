const recipeService = require("../services/recipeService");

exports.getRecipes = async (req, res, next) => {
  try {
    const ingredients = req.query.ingredients;
    const recipes = await recipeService.findRecipes(ingredients);
    res.json(recipes);
  } catch (error) {
    next(error);
  }
};
