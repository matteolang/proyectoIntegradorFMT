let instrumentos = require('../data/index')

let usersController = {
    profile: (req, res) => {
        let idUsuario = req.params.usuarioQueComento

        let result = []
        if(idUsuario != null){
        for( let i = 0; i < instrumentos.usuarios.length; i++){
            if(instrumentos.usuarios[i].id == idUsuario){
                result.push(instrumentos.usuarios[i])
            }
        }

        res.render('profile', {instrumentitos: instrumentos.lista, usuarioClickeado: idUsuario, usuario: result, perfil: instrumentos.usuarios})
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
        let idUsuario = req.params.usuario
        let result =  []
        for( let i = 0; i < instrumentos.usuarios.length; i++){
            if(idUsuario == instrumentos.usuarios[i].id){
                result.push(instrumentos.usuarios[i])
            }
        }

        res.render('profile-edit', {producto: instrumentos.lista, usuarioACambiar: idUsuario, usuario: instrumentos.usuarios, arrayDatosDelUsuario: result})
    },
}

module.exports = usersController