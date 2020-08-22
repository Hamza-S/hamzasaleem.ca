var express = require("express");
var router = express.Router();
require("dotenv").config();
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const mypass = process.env.DB_PASS;
var pgp = require("pg-promise")(/* options */);

const cn = {
  host: host,
  port: 5432,
  database: "blog",
  user: user,
  password: mypass,
};
var db = pgp(cn);

router.post("/", function (req, res, next) {
  db.any(
    "INSERT INTO posts(id, title, date, body) VALUES(${id}, ${title}, ${date}, ${body})",
    {
      id: req.body.id,
      title: req.body.title,
      date: req.body.date,
      body: req.body.body,
    }
  );
  res.send("Success");
});

module.exports = router;
