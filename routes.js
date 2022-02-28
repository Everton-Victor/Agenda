const express = require("express");
const routes = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");
const contatoController = require("./src/controllers/contatoController");

const { loginRequired } = require("./src/middlewares/middleware");

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

// Rota Nav  (Contato)
routes.get("/contato/index", loginRequired, contatoController.index);

// Rota Nav  (Contato - Registrar Contatos)
routes.post("/contato/register", loginRequired, contatoController.register);

// Rota Nav  (Contato - Obter Contatos)
routes.post("/contato/index/:id", loginRequired, contatoController.editIndex);

module.exports = routes;
