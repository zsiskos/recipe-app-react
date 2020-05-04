var express = require('express');
var router = express.Router();
const userCtrl = require('../../controllers/api/user')

router.get('/', userCtrl.index);
router.get('/:username', userCtrl.showOne);
router.post('/', userCtrl.create);
router.get('/:userName/myRecipes', userCtrl.myRecipes);
router.get('/:userName/savedRecipes', userCtrl.savedRecipes);
router.post('/signup', userCtrl.signup);


module.exports = router;