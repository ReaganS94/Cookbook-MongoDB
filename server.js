require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("colors");

const connectDB = require("./dbinit");
const recipes = require("./api/recipes");
const server = express();

const PORT = process.env.PORT || 5000;

connectDB();

server.use(express.json());
server.use(cors());
server.get("/", (req, res) => res.send("SHOW DATA HERE"));
server.use("/recipes", recipes);
server.listen(PORT, () => console.log(`Server started at ${PORT}`));

//https://www.youtube.com/watch?v=Mfp94RjugWQ

//how do i get an api to use for my front end from express
//https://www.youtube.com/watch?v=fGQFeV32nwE
