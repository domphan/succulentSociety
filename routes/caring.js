var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
  //for darkening, sending active object thru.
  res.render("caring", {active: {caring: true}});
});

router.get("/download", function(req, res){
  var file = __dirname + '/quickguide.pdf';
  res.download(file);
});

module.exports = router;
