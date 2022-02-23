const Login = require("../models/LoginModel");

exports.index = (req, res) => {
  res.render("login");
};

exports.register = (req, res) => {
  res.send(req.body);
  const login = new Login(login.body);
};
