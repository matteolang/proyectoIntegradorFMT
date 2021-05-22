let instrumentos = require('../data/index')
const db = require('../database/models')

let usersController = {
    profile: (req, res) => {
        let idUsuario = req.params.usuarioQueComento

    if (idUsuario == req.session.user.id) {

        db.Usuarios.findByPk(idUsuario)
       
        .then((resultadoss)=>{

          

           db.Products.findAll({
                where: {
                    creado_por: idUsuario 
                    
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
            
          
                res.render('profile-logueado-prototipo', {productos: resultados, datosUsuario: resultadoss, numeroComentarios: resultadosss })
      
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
     
       

         

       // res.render('profile-logueado-prototipo', {instrumentitos: instrumentos.lista, usuarioClickeado: idUsuario, usuario: result, perfil: instrumentos.usuarios, productosDelUsuario: productosQueCreo})
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
        
        let result =  []
        for( let i = 0; i < instrumentos.usuarios.length; i++){
            if(idUsuario == instrumentos.usuarios[i].id){
                result.push(instrumentos.usuarios[i])
            }
        }

        res.render('profile-edit', {producto: instrumentos.lista, usuarioACambiar: idUsuario, usuario: instrumentos.usuarios, arrayDatosDelUsuario: result})
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
        .then((userr)=>{
            req.session.user = userr
            return res.redirect("/profile/"+req.session.user.id)
        })
        .catch((error)=>{
            return res.send(error)
        })
    }
    },
}

module.exports = usersController