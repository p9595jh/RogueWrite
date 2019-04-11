var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('Invalid Endpoint');
});

router.get('/no-page', function(req, res, next) {
  res.render('no-page', {
    title: '404'
  });
});

module.exports = router;
