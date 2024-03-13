var express = require('express');
var router = express.Router();
const routHandler = require('../controls/userControl')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// user creation
router.post('/register-user',routHandler.userRegister_);

// user login
router.post('/login-user',routHandler.loginUser)
module.exports = router;
