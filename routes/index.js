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

router.get('/about', function (req, res, next) {
	res.render('pages/about');
});

router.get('/utah1', function (req, res, next) {
	res.render('landings/utah/utah1');
});
router.get('/utah2', function (req, res, next) {
	res.render('landings/utah/utah2');
});


// UTAH LANDING PAGE //
router.get('/utah', function (req, res, next) {
	var random = Math.floor(Math.random() * 2) + 1;
  	if (random == 1) {
		res.render('landings/utah/utah1');
	} else {
		res.render('landings/utah/utah2');
	}
});

module.exports = router;
