var express = require('express');
var router = express.Router();
var controllers = require(`../controllers/usersController`)
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


router.get("/", controllers.profileEdit);
router.post("/", upload.single('foto_perfil'),controllers.profileEdit)


module.exports = router