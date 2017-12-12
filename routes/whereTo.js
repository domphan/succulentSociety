var express = require('express');
var router = express.Router();
var yelp = require('yelp-fusion');

//yelp API key
var clientId = ''
var clientSecret = ''
var searchResults = [];

var searchRequest = {
  term: 'Succulents',
  location: null
};



router.get("/", function(req, res){
  //if there's no query, render page
  if (req.query.zip == null) {
    res.render('whereTo', {active: {whereTo: true}});
    //if there's a query
  } else {
    //set api location to zipcode
    searchRequest.location = req.query.zip;
    //complete promise
    yelp.accessToken(clientId, clientSecret).then(response => {
      const client = yelp.client(response.jsonBody.access_token);
      client.search(searchRequest).then(response => {
        //Top 5 results will be sent into the client's render by server

        searchResults = [];
        for (let i = 0; i < 5; i++){
          searchResults.push(response.jsonBody.businesses[i]);
        }
        res.render('whereTo', {searchResults: searchResults, active: {whereTo:true}});
      });
    }).catch(e => {
        console.log(e);
    });
  }
});




module.exports = router;
