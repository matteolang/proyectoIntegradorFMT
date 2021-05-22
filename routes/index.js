var express = require('express');
var router = express.Router();
var controllers = require(`../controllers/indexController`)
var controllerLogout = require(`../controllers/securityController`)

/* GET home page. */
router.get('/', controllers.index);

router.get("/search-results", controllers.searchResults);

router.get("/login", controllerLogout.logout)


module.exports = router;

