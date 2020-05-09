var express = require("express");
var router = express.Router();

var pgp = require("pg-promise")(/* options */);
var db = pgp("postgres://postgres:postgres@localhost:5432/blog");
/* GET users listing. */

router.get("/", function (req, res, next) {
  db.any("SELECT id,title,date,body FROM posts")
    .then(function (data) {
      res.json(data);
    })
    .catch(function (error) {
      console.log("ERROR:", error);
    });
});

module.exports = router;
