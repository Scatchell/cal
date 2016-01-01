var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { });
});

router.get('/classrooms', function(req, res, next) {
  res.render('classrooms', { });
});

module.exports = router;