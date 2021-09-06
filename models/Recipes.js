const mongoose = require("mongoose");

const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: {
    type: String,
  },

  url: {
    type: String,
  },

  fileName: {
    type: String,
  },

  description: {
    type: String,
  },

  recipeIntro: {
    type: String,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
