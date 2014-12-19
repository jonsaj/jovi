var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

 var video ="<iframe width=\"560\" height=\"315\" src=\"//www.youtube.com/embed/e7x9J2U8ZR4\" frameborder=\"0\" allowfullscreen></iframe>" ;
  res.render('index', { title: 'Jovi Raps',
			youtubevideo:  video});
});

module.exports = router;
