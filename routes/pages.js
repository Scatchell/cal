var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { });
});

router.get('/services', function(req, res, next) {
  res.render('services', { });
});

module.exports = router;