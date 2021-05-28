const db = require('../database/models')
const bcrypt = require('bcryptjs')

let usersController = {
    profile: (req, res) => {
        let idUsuario = req.params.usuarioQueComento

        if (idUsuario == req.session.user.id) {

            db.Usuarios.findByPk(req.session.user.id)
            .then((resultadoss)=>{ 
                if(resultadoss.cantidad_de_productos > 0){
                    db.Products.findAll({
                    where: {
                        creado_por: resultadoss.id 
                    
                    }
                    })
                    .then((resultados)=>{     
                        resultados.forEach(element => {
                            db.Comentarios.findAll({
                            where: {
                                id_producto_comentado: element.dataValues.id
                            }
        
                            })
                            .then((resultadosss)=>{
                                req.session.user = resultadoss
          
                                res.render('profile-logueado', {productos: resultados, datosUsuario: resultadoss, numeroComentarios: resultadosss })
      
                            })
                            .catch((error)=>{
                                return res.send(error)
                            })
                        });          
                    })
                    .catch((error)=>{
                        return res.send(error)
                    })
                } else {
                    res.render('profile-logueado-sin-productos', {datosUsuario: resultadoss})
                }
            })
            .catch((error)=>{
                return res.send(error)
            })
        }
        else {
            db.Usuarios.findByPk(idUsuario)
            
            .then((usuario)=>{
                if(usuario.cantidad_de_productos > 0){
                db.Products.findAll({
                    where: {
                        creado_por: idUsuario 
                    
                    }
                })
                .then((productos)=>{
          
                    productos.forEach(element => {
                        db.Comentarios.findAll({
               
                            where: {
                                id_producto_comentado: element.dataValues.id
                            }
        
                        })
                        .then((comentarios)=>{

                            res.render('profiles-otros', {productos: productos, datosUsuario: usuario, numeroComentarios: comentarios })
            
                        })
                        .catch((error)=>{
                            return res.send(error)
                        })
                    });

           

                })
                .catch((error)=>{
                    return res.send(error)
                })
            } else {
                res.render('profile-logueado-sin-productos', {datosUsuario: usuario})
            }
            })
            .catch((error)=>{
                return res.send(error)
            })
     

        }


       
  
    },
    profileEdit: (req, res) => {
        let idUsuario = req.session.user.id
        if(req.method == "GET"){

            res.render('profile-edit', {failed: req.query.failed})
        }
        if(req.method == "POST"){

            if(req.body.clavee == req.body.clave && req.body.clave.length > 5){

            req.body.clave = bcrypt.hashSync(req.body.clave)

            let usuario = {
            clave: req.body.clave,
            foto_perfil: req.body.foto_perfil,
            fecha_de_nacimiento: req.body.fecha_de_nacimiento,
            username: req.body.username
            }



            db.Usuarios.update(usuario, {
                where: {
                    id: idUsuario
                }
            })
            .then(()=>{
                db.Usuarios.findOne({
                    where: {
                        id: idUsuario
                    }
                })
                .then((usuarioUpdateado)=>{
                
                    req.session.user = usuarioUpdateado

                    res.redirect("/profile/"+req.session.user.id)
                })
                .catch((error)=>{
                    return res.send(error)
                })
            
            })
            .catch((error)=>{
                return res.send(error)
            })
        } else  {
            res.redirect("/profile-edit/?failed=true")
        }
        }
    },
}

module.exports = usersController