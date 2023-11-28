const express = require("express");
const app = express();

const movieControllers = require("./controllers/movieControllers");
const usersController = require("./controllers/usersController");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

app.get("/api/users", usersController.getUsers);
app.get("/api/users/:id", usersController.getUsersById);

module.exports = app;
