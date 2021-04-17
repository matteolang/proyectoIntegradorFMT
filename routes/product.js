var express = require('express');
var router = express.Router();
var controllers = require(`../controllers/productController`)


router.get('/', controllers.product);

router.get("/:id", controllers.product);

router.get("-add", controllers.productAdd);


module.exports = router;