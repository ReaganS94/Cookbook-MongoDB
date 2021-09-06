const Recipe = require("../models/Recipes");

const getRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.json({
      data: recipes,
    });
  } catch (err) {
    console.log(err);
  }
};

const getRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    res.json({
      data: recipe,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getRecipes,
  getRecipe,
};
