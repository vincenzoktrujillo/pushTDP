var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lista', function(req,res,next){
  res.render('index',{title: 'Liasta'});
})

module.exports = router;
