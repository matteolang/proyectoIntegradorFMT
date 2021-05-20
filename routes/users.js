var express = require('express');
var router = express.Router();
var controllers = require(`../controllers/usersController`)

router.get('/:usuarioQueComento?', controllers.profile);

router.get("/profile-edit", controllers.profileEdit);

module.exports = router