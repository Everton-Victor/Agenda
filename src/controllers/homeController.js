exports.index = (req, res) => {
  res.render("index");
};

const HomeModel = require("../models/HomeModel");

exports.form = (req, res) => {
  const home = new HomeModel({
    nome: req.body.nome,
    idade: 19,
  });
  res.render("result", {
    dados: home,
  });
};
