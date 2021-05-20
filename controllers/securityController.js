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
            db.Users.create(req.body)
            .then(()=>{
                res.redirect("/")
            })
            .catch((error)=>{
                return res.send(error)
            })
        }

        return res.render("security/register")
    },
    logout: function(req,res){
        req.session.destroy();

        return res.redirect("/")
    },


}

module.exports = securityController;