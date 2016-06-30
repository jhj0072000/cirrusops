var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/index');
});

router.get('/connect', function (req, res, next) {
	res.render('pages/connect');
});

router.get('/layouts', function (req, res, next) {
	res.render('pages/layouts');
});

router.get('/random', function (req, res, next) {
	var random = Math.floor(Math.random() * 2) + 1;
  	if (random == 1) {
		res.render('pages/1');
	} else {
		res.render('pages/2');
	}
});

module.exports = router;
