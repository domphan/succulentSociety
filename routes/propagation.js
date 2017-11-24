var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
  //for menu darkening, sending active object thru.
  res.render("propagation", {active: {propagate: true}});
})

module.exports = router;
