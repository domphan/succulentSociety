var express    = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

var app = express();
var landingRoutes      = require("./routes/index");
var caringRoutes       = require("./routes/caring");
var troubleshootRoutes = require("./routes/troubleshoot");
var propagationRoutes  = require("./routes/propagation");
var whereToRoutes      = require("./routes/whereTo");

app.engine('handlebars', handlebars.engine);
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + "/public"));

app.use("/", landingRoutes);
app.use("/caring", caringRoutes);
app.use("/troubleshoot", troubleshootRoutes);
app.use("/propagation", propagationRoutes);
app.use("/whereTo", whereToRoutes);

app.use(function(req, res){
  res.status(404);
  res.send('Error 404');
});

app.use(function(err, req, res, next){
  console.log(err.stack);
  res.status(500);
  res.send('Error 500');
});

app.listen(7998, function(){
  console.log('Express server started on 7998');
});
