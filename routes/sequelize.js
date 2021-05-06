var express = require('express')
var router = express.Router()
const db = require('../database/models')
var sequelizeController = require('../controllers/sequelizeController')

router.get('/usuarios', sequelizeController.usuarios);

router.get('/products', sequelizeController.products);

router.get('/comentarios', sequelizeController.comentarios);

router.get('/productosCreados', sequelizeController.productosCreados);

module.exports = router