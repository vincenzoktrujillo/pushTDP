var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController.js');

/* GET users by course */
router.get('/user/:id', function(req,res,next){
      res.send('Id es ' + req.params.id);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Entramos')
  res.render('index', { title: 'User Board' });
});

module.exports = router;
