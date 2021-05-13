var express = require('express');
var router = express.Router();
var controllers = require(`../controllers/productController`)


router.get('/', controllers.product);

router.get("/id/:id?", controllers.product);

router.get("/product-add", controllers.productAdd);

router.post("/product-add", controllers.productSum);

router.get("/product-edit/:id", controllers.productEdit);


module.exports = router;