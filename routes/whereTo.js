var express = require('express');
var router = express.Router();
var yelp = require('yelp-fusion');

var clientId = '9yqFTHbQ1yOYkgGdrZMduw'
var clientSecret = 'RAGTqrJ0Wvqk9PDWbp0bb1OYCAitCMhtyikG5LHGVXcCvlGQl6BRoSdoFkJQuW9v'
var searchResults = [];

var searchRequest = {
  term: 'Succulents',
  location: '95166'
};



router.get("/", function(req, res){
  if (req.query.zip == null) {
    res.render('whereTo', {active: {whereTo: true}});
  } else {
    searchRequest.location = req.query.zip;
    yelp.accessToken(clientId, clientSecret).then(response => {
      const client = yelp.client(response.jsonBody.access_token);
      client.search(searchRequest).then(response => {
        searchResults = [];
        for (let i = 0; i < 5; i++){
          searchResults.push(response.jsonBody.businesses[i]);
        }
        // var prettyJson = JSON.stringify(searchResults, null, 4);
        // console.log(prettyJson);
        res.render('whereTo', {searchResults: searchResults, active: {whereTo:true}});
      });
    }).catch(e => {
        console.log(e);
    });
  }
});




module.exports = router;
