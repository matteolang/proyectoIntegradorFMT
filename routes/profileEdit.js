var express = require('express');
var router = express.Router();
var controllers = require(`../controllers/usersController`)


router.get("/:usuario?", controllers.profileEdit);


module.exports = router