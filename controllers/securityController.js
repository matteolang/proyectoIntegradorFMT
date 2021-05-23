const db = require('../database/models')

let securityController = {
    login: function(req,res){
        return res.render("security/login", {failed: req.query.failed})
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
            return res.redirect("/security/login?failed=true")
            })
        .catch((error)=>{
            return res.redirect("/security/login?failed=true")

        })

    },
    register: function(req,res){
        
        
       
    if (req.method == "POST") {

        if(req.body.password === req.body.passwordd){

            const usuarioCreado = {
                username: req.body.username,
                fecha_de_nacimiento: req.body.fecha,
                clave: req.body.password
            }
            if(usuarioCreado.clave.length < 5){
                res.redirect("/security/register?failed2=true")
            } else {

                db.Usuarios.count({where: {username: usuarioCreado.username}})
                .then((count)=>{

                    if(usuarioCreado.username.indexOf(' ') >= 0){
                        res.redirect("/security/register?failed=true")
                    } else if(count == 0){
                        db.Usuarios.create(usuarioCreado)
                         .then((usuario)=>{
                    
                            return res.redirect("/security/login") 
                
                         })
                         .catch((error)=>{
                              return res.send(error)
                          })
                          } else  {
                             res.redirect("/security/register?failed=true")
                          }
                 })
                .catch((error)=>{
                    return res.send(error)
                 })
                }
        } else if (req.body.password != req.body.passwordd) {
            res.redirect("/security/register?failed3=true")
        }
    }

    if(req.method == "GET"){
                return res.render("security/register", {failed: req.query.failed, failed2: req.query.failed2, failed3: req.query.failed3})
    }
     
    },
    logout: function(req,res){
        req.session.destroy();

        res.redirect("/security/login")
    },


}

module.exports = securityController;