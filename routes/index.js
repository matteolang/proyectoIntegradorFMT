var express = require('express');
var router = express.Router();
var controllers = require(`../controllers/indexController`)

/* GET home page. */
router.get('/', controllers.index);

router.get("/register", controllers.register);

router.get("/login", controllers.login);

router.get("/profile", controllers.profile);

router.get("/profile-edit", controllers.profileEdit);

router.get("/search-results", controllers.searchResults);


module.exports = router;

console.log(router);
