var express = require('express');
var router = express.Router();
var securityController = require(`../controllers/securityController`)

router.get("/login", securityController.login)
router.post("/login", securityController.authenticate)
router.all("/register", securityController.register)
router.get("/logout", securityController.logout)

module.exports = router;
