var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
    var random_num = Math.floor(Math.random() * 100) + 1;
    let ip = req.query.x;
    var number;
if(ip == undefined ) {
number = random_num;
}
else{
  number =  ip;
}  
  res.render('computation',{
      title:`Math.tan() applied to ${number} is ${Math.tan(number)}`
  });
});

module.exports = router;