let instrumentos = require('../data/index')

let mainController = {
    index: (req, res) => {
        res.render('index', {instrumentitos: instrumentos.lista})
    },
    product: (req, res) => {
        let id = req.params.id
        res.render('product', {producto: instrumentos.lista, idSearch: id})
    },
    register: (req, res) => {
        res.render('register', {title: 'Register'})
    },
    login: (req, res) => {
        res.render('login', {title: 'Inicia Sesion'})
    },
    profile: (req, res) => {
        res.render('profile', {instrumentitos: instrumentos.lista})
    },
    productAdd: (req, res) => {
        res.render('product-add', {title: 'Agrega tu producto'})
    },
    profileEdit: (req, res) => {
        res.render('profile-edit', {title: 'Edita tu perfil'})
    },
    searchResults: (req, res) => {

        let search = req.query.searchResults

        let result = []
        for( let i = 0; i < instrumentos.lista.length; i++){
            console.log(instrumentos.lista[i].nombreDelInstrumento);
            if(instrumentos.lista[i].nombreDelInstrumento.includes(search.toLowerCase())){
                result.push(instrumentos.lista[i].nombreDelInstrumento)
            }
        }
        res.render('search-results', {resultadoSearch: result})
    },
}

module.exports = mainController;