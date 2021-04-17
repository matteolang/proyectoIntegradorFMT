var express = require('express');
var router = express.Router();
var controllers = require(`../controllers/usersController`)

router.get("/", controllers.login);

module.exports = router