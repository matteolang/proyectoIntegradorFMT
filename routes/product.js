var express = require('express');
var router = express.Router();
var controllers = require(`../controllers/productController`)
var multer = require('multer')
var path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './public/images');
    },
    filename: (req, file, cb)=> {
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

router.get('/', controllers.product);

router.get("/id/:id", controllers.product);
router.post("/id/:id", controllers.comentario);
router.post("/id/:id/eliminar", controllers.eliminar);
router.post("/id/:id/borrar/:comentario", controllers.borrar);

router.get("/product-add", controllers.productAdd);

router.post("/product-add", upload.single('foto'), controllers.productSum);

router.get("/product-edit/:id", controllers.productEdit);
router.post("/product-edit/:id", upload.single('foto'), controllers.productChange);


module.exports = router;