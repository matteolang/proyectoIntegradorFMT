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
          
            if (req.body.password === user.clave) {
                req.session.user = user
                
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
            .then(()=>{
               
               res.redirect("/security/login") 
                
            })
            .catch((error)=>{
                return res.send(error)
            })
        }

        if(req.method == "GET"){
                return res.render("security/register")
        }
    },
    logout: function(req,res){
        req.session.destroy();

        res.redirect("/security/login")
    },


}

module.exports = securityController;