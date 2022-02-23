require("dotenv").config();

const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const helmet = require("helmet");
const csrf = require("csurf");

const {
  checkCsrError,
  csrfMiddleware,
  flashMiddleware,
} = require("./src/middlewares/middleware");

const sessionOptions = session({
  secret: "asfjdncjdkdkjcndnvidodn ddoododododidid a90()",
  store: MongoStore.create({ mongoUrl: process.env.CONNECT_STRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);

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

app.use(helmet());
app.use(express.json());
app.use(flash());
app.use(csrf());
app.use(checkCsrError);
app.use(csrfMiddleware);
app.use(flashMiddleware);

app.use(routes);

app.on("conectado", () => {
  app.listen(3000, () => console.log("http://localhost:3000"));
});
