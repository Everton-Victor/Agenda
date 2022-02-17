const express = require("express");
const routes = express.Router();
const homeController = require("./src/controllers/homeController");

routes.get("/", homeController.index);
routes.post("/form", homeController.form);

module.exports = routes;
