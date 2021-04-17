var express = require('express');
var router = express.Router();
var controllers = require(`../controllers/usersController`)

router.get('/', controllers.profile);

router.get("/login", controllers.login);

router.get("/register", controllers.register);

router.get("/profile-edit", controllers.profileEdit);

module.exports = router