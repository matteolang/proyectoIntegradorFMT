let instrumentos = require('../data/index')

let usersController = {
    profile: (req, res) => {
        res.render('profile', {instrumentitos: instrumentos.lista})
    },
    login: (req, res) => {
        res.render('login', {title: 'Inicia Sesion'})
    },
    register: (req, res) => {
        res.render('register', {title: 'Register'})
    },
    profileEdit: (req, res) => {
        res.render('profile-edit', {title: 'Edita tu perfil'})
    },
}

module.exports = usersController