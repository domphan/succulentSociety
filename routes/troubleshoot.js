var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
  res.render("troubleshoot", {active: {troubleshoot: true}});
})

module.exports = router;
