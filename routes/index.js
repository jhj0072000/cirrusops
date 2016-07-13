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

// UTAH LANDING PAGE //
router.get('/utah1', function (req, res, next) {
	res.render('landings/utah/utah1');
});

router.get('/utah2', function (req, res, next) {
	res.render('landings/utah/utah2');
});

router.get('/utah', function (req, res, next) {
	var random = Math.floor(Math.random() * 2) + 1;
  	if (random == 1) {
		res.redirect('/utah1');
	} else {
		res.redirect('/utah2');
	}
});

// SOLAR //
router.get('/solar1', function (req, res, next) {
	res.render('landings/solar/solar1');
});

router.get('/solar2', function (req, res, next) {
	res.render('landings/solar/solar2');
});

router.get('/solar', function (req, res, next) {
	var random = Math.floor(Math.random() * 2) + 1;
  	if (random == 1) {
		res.redirect('/solar1');
	} else {
		res.redirect('/solar2');
	}
});









module.exports = router;
