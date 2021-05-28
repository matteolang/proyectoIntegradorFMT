var express = require('express');
var router = express.Router();
var controllers = require(`../controllers/usersController`)


router.get("/", controllers.profileEdit);
router.post("/", controllers.profileEdit)


module.exports = router