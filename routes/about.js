var express = require('express');
var router = express.Router();

/* GET solution page. */
router.get('/', function (req, res, next) {
  res.render('pages/company');
});
router.get('/company', function (req, res, next) {
  res.render('pages/company');
});
router.get('/crew', function (req, res, next) {
  res.render('pages/crew');
});
router.get('/insights', function (req, res, next) {
  res.render('pages/insights');
});
router.get('/career', function (req, res, next) {
  res.render('pages/career');
});


module.exports = router;
