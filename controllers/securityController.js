const db = require('../database/models')

let securityController = {
    login: function(req,res){
        return res.render("security/login")
    },
    authenticate: function(req,res){
        db.Usuarios.findOne(
            {
                where:{username: req.body.username}
            })
        .then((user)=> {
            console.log(req.body.password);
            console.log(user.clave);
            if (req.body.password === user.clave) {
                req.session.user = user
                console.log(res.locals.user)
                    return res.redirect("/")
                    

            }
             res.redirect("/login?failed=true")
            })
        .catch((error)=>{
            return res.send(error)

        })

    },
    register: function(req,res){
        
        
       
        if (req.method == "POST") {
            let usuarioCreado = {
                username: req.body.username,
                fecha_de_nacimiento: req.body.fecha,
                clave: req.body.password
            }

            db.Usuarios.create(usuarioCreado)
            .then((user)=>{
                
              return res.redirect("/security/login") // NO ANDA
                
            })
            .catch((error)=>{
                return res.send(error)
            })
        }

        return res.render("security/register")
    },
    logout: function(req,res){
        req.session.destroy();

        res.redirect("/security/login")
    },


}

module.exports = securityController;