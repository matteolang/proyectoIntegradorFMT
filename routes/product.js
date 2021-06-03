var express = require('express');
var router = express.Router();
var controllers = require(`../controllers/productController`)


router.get('/', controllers.product);

router.get("/id/:id", controllers.product);
router.post("/id/:id", controllers.comentario);
router.post("/id/:id/eliminar", controllers.eliminar);
router.post("/id/:id/borrar/:comentario", controllers.borrar);

router.get("/product-add", controllers.productAdd);

router.post("/product-add", controllers.productSum);

router.get("/product-edit/:id", controllers.productEdit);
router.post("/product-edit/:id", controllers.productChange);


module.exports = router;