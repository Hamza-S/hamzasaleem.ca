var express = require("express");
const e = require("express");
var router = express.Router();
require("dotenv").config();
const user = process.env.ADMIN_USER;
const pass = process.env.ADMIN_PASS;

/* GET users listing. */

router.post("/", function (req, res, next) {
  if (req.body.user === user && req.body.pass === pass) {
    res.send("valid");
  } else {
    res.send("invalid");
  }
});

module.exports = router;
