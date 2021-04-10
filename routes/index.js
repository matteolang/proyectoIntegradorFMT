var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mercado Libre' });
});
router.get("/product", function(req, res, next) {
  res.render('product', { title: 'Productos' });
});
router.get("/register", function(req, res, next) {
  res.render('register', { title: 'Registrate' });
});
router.get("/login", function(req, res, next) {
  res.render('login', { title: 'Inicia sesion' });
});
router.get("/profile", function(req, res, next) {
  res.render('profile', { title: 'Perfil del usuario' });
});
router.get("/product-add", function(req, res, next) {
  res.render('product-add', { title: 'Agrega tu producto' });
});
router.get("/profile-edit", function(req, res, next) {
  res.render('profile-edit', { title: 'Edita tu perfil' });
});
router.get("/search-results", function(req, res, next) {
  res.render('search-results', { title: 'respuestas a tu busqueda' });
});


module.exports = router;
