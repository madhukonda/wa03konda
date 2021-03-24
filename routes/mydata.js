var express = require('express');
var router = express.Router();

/* Fun Fact */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Madhu babu Konda' });
});

module.exports = router;