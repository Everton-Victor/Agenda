const express = require("express");
const routes = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");

// rota da home
routes.get("/", homeController.index);

routes.get("/login", loginController.index);

module.exports = routes;
