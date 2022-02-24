const express = require("express");
const routes = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");

// rota da home
routes.get("/", homeController.index);

// rota da página de Login
routes.get("/login/index", loginController.index);

// Rota Action Form Register (Cadastro)
routes.post("/login/register", loginController.register);

// Rota Action Form Login (Entrar)
routes.post("/login/login", loginController.login);

// Rota Nav  (Sair)
routes.get("/login/logout", loginController.logout);

module.exports = routes;
