var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var key = process.env.PIVOTAL_API;

/* GET home page. */
router.get('/', function(req, res, next) {
  unirest.get('https://www.pivotaltracker.com/services/v5/projects/1374576/stories')
  .header('X-TrackerToken', key)
  .end(function (response){
    res.render('index', {stories: response.body});
    console.log(typeof response.body[0].estimate);
  });
});


module.exports = router;
