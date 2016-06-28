var express = require('express');
var router = express.Router();

/* GET solution page. */
router.get('/', function (req, res, next) {
  res.render('pages/quickbase');
});
router.get('/quickbase', function (req, res, next) {
  res.render('pages/quickbase');
});
router.get('/spreadsheet', function (req, res, next) {
  res.render('pages/spreadsheet');
});
router.get('/consulting', function (req, res, next) {
  res.render('pages/consulting');
});
router.get('/custom-solutions', function (req, res, next) {
  res.render('pages/custom-solutions');
});
router.get('/integrations', function (req, res, next) {
  res.render('pages/integrations');
});



module.exports = router;
