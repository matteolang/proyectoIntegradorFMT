const db = require('../database/models')
const bcrypt = require('bcryptjs')

let securityController = {
    login: function(req,res){
        return res.render("security/login", {failed: req.query.failed, failed2: req.query.failed2})
    },
    authenticate: function(req,res){
        db.Usuarios.findOne(
            {
                where:{email: req.body.email}
            })
        .then((user)=> {
          
            if (bcrypt.compareSync(req.body.password, user.clave)) {
                    req.session.user = user

                    if (req.body.rememberMe) {
                        res.cookie('userId', user.id, { maxAge: 1000* 60*60*24})
                    }
                    return res.redirect("/")  
            } 

                return res.redirect("/security/login?failed2=true")

        })
        .catch((error)=>{
            return res.redirect("/security/login?failed=true")

        })

    },
    register: function(req,res){
        
        if (req.method == "POST") {

            if(req.body.password === req.body.passwordd){

                req.body.password = bcrypt.hashSync(req.body.password)

                const usuarioCreado = {
                    username: req.body.username,
                    fecha_de_nacimiento: req.body.fecha,
                    clave: req.body.password,
                    email: req.body.email,

                }

                if(!usuarioCreado.clave || usuarioCreado.clave.length < 5){
                    res.redirect("/security/register?failed2=true")
                } 
                else {
                   // db.Usuarios.count({where: {email: usuarioCreado.email}})
                    //.then((count)=>{

                        //if(usuarioCreado.email.indexOf(' ') >= 0){
                          //  res.redirect("/security/register?failed=true")
                        //} else if(count == 0){
                            db.Usuarios.create(usuarioCreado)
                            .then((usuario)=>{
                    
                                return res.redirect("/security/login") 
                
                            })
                            .catch((error)=>{
                                 return res.redirect("/security/register?failed=true")
                            })
                        //} else  {
                          //   res.redirect("/security/register?failed=true")
                        //}
                  //  })
                    //.catch((error)=>{
                    //return res.send(error)
                    //z})
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
        res.clearCookie('userId')

        return res.redirect("/")
    },


}

module.exports = securityController;