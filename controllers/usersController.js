let instrumentos = require('../data/index')

let usersController = {
    profile: (req, res) => {
        let nombreUsuario = req.params.usuarioQueComento

        let result = []
        if(nombreUsuario != null){
        for( let i = 0; i < instrumentos.usuarios.length; i++){
            if(instrumentos.usuarios[i].username.toLowerCase() == nombreUsuario.toLowerCase()){
                result.push(instrumentos.usuarios[i])
            }
        }

        res.render('profile', {instrumentitos: instrumentos.lista, usuarioClickeado: nombreUsuario, usuario: result, perfil: instrumentos.usuarios})
    }
    else {
        res.render('profile', {instrumentitos: instrumentos.lista, usuarioClickeado: nombreUsuario, usuario: result, perfil: instrumentos.usuarios})
    }
    },
    login: (req, res) => {
        res.render('login', {title: 'Inicia Sesion'})
    },
    register: (req, res) => {
        res.render('register', {title: 'Register'})
    },
    profileEdit: (req, res) => {
        let id = req.params.id
        res.render('profile-edit', {producto: instrumentos.lista, idSearch: id, usuario: instrumentos.usuarios})
    },
}

module.exports = usersController