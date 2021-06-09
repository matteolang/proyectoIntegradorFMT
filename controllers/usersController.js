const db = require('../database/models')
const bcrypt = require('bcryptjs')
const currentDate = new Date

let usersController = {
    profile: (req, res) => {
        let idUsuario = req.params.usuarioQueComento
        if (req.session.user && req.session.user.id == idUsuario) {

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

            res.render('profile-edit', {failed: req.query.failed, error: req.query.error})
        }
        if(req.method == "POST"){

            

            if(req.body.clavee == req.body.clave && req.body.clave.length > 5){
                if(!req.file){

                
            req.body.clave = bcrypt.hashSync(req.body.clave)

            let usuario = {
            clave: req.body.clave,
            foto_perfil: '/undefined-1623092790999.png',
            fecha_de_nacimiento: req.body.fecha_de_nacimiento,
            username: req.body.username,
            email: req.body.email,
            

            }
            let fotoUpdate = {
                foto_autor:  '/undefined-1623092790999.png' 
            }
    

          
            db.Usuarios.update(usuario, {
                where: {
                    id: idUsuario
                }
            })
            .then(()=>{
                db.Comentarios.update(fotoUpdate,{
                    where: {
                        id_autor: idUsuario
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
                }).catch((error)=>{
                    return res.send(error)
                })
               
            
            })
            .catch((error)=>{
                return res.redirect('/profile-edit?error=true')
            })
        } else {
            req.body.clave = bcrypt.hashSync(req.body.clave)

            let usuario = {
            clave: req.body.clave,
            foto_perfil: req.file.filename,
            fecha_de_nacimiento: req.body.fecha_de_nacimiento,
            username: req.body.username,
            email: req.body.email,
        
            }
            let fotoUpdate = {
                foto_autor:  req.file.filename
            }
    


            db.Usuarios.update(usuario, {
                where: {
                    id: idUsuario
                }
            })
            .then(()=>{
                db.Comentarios.update(fotoUpdate,{
                    where: {
                        id_autor: idUsuario
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
                }).catch((error)=>{
                    return res.send(error)
                })
               
            
            })
            .catch((error)=>{
                return res.redirect('/profile-edit?error=true')
            })
        }

        } else  {
            res.redirect("/profile-edit/?failed=true")
        }
        }

    },
}

module.exports = usersController