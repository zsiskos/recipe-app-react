var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/api/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Recipe Box' });
});
router.post('/signup', usersCtrl.signup);


module.exports = router;
