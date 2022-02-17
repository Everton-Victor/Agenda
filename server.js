require("dotenv").config();

const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECT_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.emit("conectado"))
  .catch((e) => console.log(e));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);

app.on("conectado", () => {
  app.listen(3000, () => console.log("http://localhost:3000"));
});
