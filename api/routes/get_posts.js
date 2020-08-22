var express = require("express");
var router = express.Router();
require('dotenv').config();
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const mypass = process.env.DB_PASS;
var pgp = require("pg-promise")(/* options */);

const cn = {
  host: host,
  port: 5432,
  database: 'blog',
  user: user,
  password: mypass
};
var db = pgp(cn);
/* GET users listing. */

router.get("/", function (req, res, next) {
  console.log(process.env.DB_HOST);
  db.any("SELECT id,title,date,body FROM posts")
    .then(function (data) {
      res.json(data);
    })
    .catch(function (error) {
      console.log("ERROR:", error);
    });
});

module.exports = router;
