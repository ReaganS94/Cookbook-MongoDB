const express = require("express");

const api = express.Router();

const { getRecipes, getRecipe } = require("../controllers/recipes");

api.route("/").get(getRecipes);

api.route("/:id").get(getRecipe);

module.exports = api;
