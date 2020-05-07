var express = require("express");
var router = express.Router();

var pgp = require("pg-promise")(/* options */);
var db = pgp("postgres://postgres:postgres@localhost:5432/blog");
/* GET users listing. */
router.get("/", function (req, res, next) {
  db.any("SELECT id,title,date,body FROM posts")
    .then(function (data) {
      const str = JSON.stringify(data[0]);
      const obj = JSON.parse(str);
      const id = obj.id;
      const title = obj.title;
      const date = obj.date;
      const body = obj.body;
      res.send(body);
      console.log(data[0]);
    })
    .catch(function (error) {
      console.log("ERROR:", error);
    });
});

module.exports = router;
