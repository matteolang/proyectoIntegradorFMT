const db = require('../database/models')

let usersController = {
    profile: (req, res) => {
        let idUsuario = req.params.usuarioQueComento

    if (idUsuario == req.session.user.id) {

        db.Usuarios.findByPk(req.session.user.id)
        .then((resultadoss)=>{ 
           db.Products.findAll({
                where: {
                    creado_por: resultadoss.id 
                    
                }
            })
            //res.render('profile-logueado-prototipo-sin-productos')
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
        })
        .catch((error)=>{
            return res.send(error)
        })
     }
    
    
    
        else {
        db.Products.findAll({
            where: {
                creado_por: idUsuario 
                
            }
        })
        .then((productos)=>{

            
            db.Usuarios.findByPk(idUsuario)
        .then((usuario)=>{
          
           

       productos.forEach(element => {
        db.Comentarios.findAll({
               
            where: {
                id_producto_comentado: element.dataValues.id
            }
        
        })
        .then((comentarios)=>{
            // if(resultadosss == true){

                res.render('profiles-otros', {productos: productos, datosUsuario: usuario, numeroComentarios: comentarios })
            // }
            })
    .catch((error)=>{
        return res.send(error)
   })
       });

           

        })
        .catch((error)=>{
            return res.send(error)
        })
   
        })
        .catch((error)=>{
            return res.send(error)
        })
     

    }


       
  
    },
    profileEdit: (req, res) => {
        let idUsuario = req.params.usuario
        if(req.method == "GET"){

            res.render('profile-edit', {})
        
       
    }
    if(req.method == "POST"){
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
                console.log(usuarioUpdateado);
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
    }
    },
}

module.exports = usersController