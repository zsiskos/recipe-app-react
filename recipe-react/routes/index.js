var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/api/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Recipe Box' });
});
router.get
router.post('/signup', usersCtrl.create);


module.exports = router;
