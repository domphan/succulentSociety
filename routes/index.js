var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
  //for menu darkening, sending active object.
  res.render("landing", {active: {home: true}});
})

module.exports = router;
