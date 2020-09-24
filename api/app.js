var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var blogRouter = require("./routes/blog");
var usersRouter = require("./routes/users");
var getPostsRouter = require("./routes/get_posts");
var authRouter = require("./routes/auth");
var newPostRouter = require("./routes/newpost");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/get_posts", getPostsRouter);
app.use("/auth", authRouter);
app.use("/newpost", newPostRouter);
app.use("/blog", blogRouter);

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", function (req, res, next) {
  res.sendFile(path.resolve("../frontend/build/index.html"));
});
app.listen(process.env.PORT || 8080);
module.exports = app;
