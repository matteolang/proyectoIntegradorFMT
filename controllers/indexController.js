let instrumentos = require('../data/index')

let mainController = {
    index: (req, res) => {
        res.render('index', {instrumentitos: instrumentos.lista})
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
    profileEdit: (req, res) => {
        res.render('profile-edit', {title: 'Edita tu perfil'})
    },
    searchResults: (req, res) => {

        let search = req.query.searchResults

        let result = []
        for( let i = 0; i < instrumentos.lista.length; i++){
            if(instrumentos.lista[i].nombreDelInstrumento.toLowerCase().includes(search.toLowerCase())){
                result.push(instrumentos.lista[i].nombreDelInstrumento)
            }
        }
        res.render('search-results', {resultadoSearch: result})
    },
}

module.exports = mainController;