let instrumentos = require('')

let mainController = {
    index: (req, res) => {
        res.render('index', {title: 'Instrumentos'})
    },
    product: (req, res) => {
        res.render('product', {title: 'Productos'})
    },
    register: (req, res) => {
        res.render('register', {title: 'Register'})
    },
    login: (req, res) => {
        res.render('login', {title: 'Inicia Sesion'})
    },
    profile: (req, res) => {
        res.render('profile', {title: 'Perfil del usuario'})
    },
    productAdd: (req, res) => {
        res.render('product-add', {title: 'Agrega tu producto'})
    },
    profileEdit: (req, res) => {
        res.render('profile-edit', {title: 'Edita tu perfil'})
    },
    searchResults: (req, res) => {
        res.render('search-results', {title: 'Respuestas a tu busqueda'})
    },
}

module.exports = mainController;