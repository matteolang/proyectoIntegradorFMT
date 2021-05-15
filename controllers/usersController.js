let instrumentos = require('../data/index')
const db = require('../database/models')

let usersController = {
    profile: (req, res) => {
        let idUsuario = req.params.usuarioQueComento

       /* let result = []
    
        for( let i = 0; i < instrumentos.usuarios.length; i++){
            if(instrumentos.usuarios[i].id == idUsuario){
                result.push(instrumentos.usuarios[i])
            }
        }

        let productosQueCreo = []
        for(let i = 0; i < instrumentos.lista.length; i++){
            for(let a = 0; a < result[0].idsDeLosProductosCreados.length; a++){
            if(result[0].idsDeLosProductosCreados[a] === instrumentos.lista[i].id){
                productosQueCreo.push(instrumentos.lista[i])
            }
        }
    }
*/

    if (idUsuario == 5) {

        db.Products.findAll({
            where: {
                creado_por: idUsuario 
                
            }
        })
        .then((resultados)=>{

            
            db.Usuarios.findByPk(idUsuario)
        .then((resultadoss)=>{
          
           

       resultados.forEach(element => {
        db.Comentarios.findAll({
               
            where: {
                id_producto_comentado: element.dataValues.id
            }
        
        })
        .then((resultadosss)=>{
            
            // if(resultadosss == true){
                res.render('profile-logueado-prototipo', {productos: resultados, datosUsuario: resultadoss, numeroComentarios: resultadosss })
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