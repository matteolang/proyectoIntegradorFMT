let instrumentos = require('../data/index')
const db = require('../database/models')
const Usuarios = require('../database/models/Usuarios')

let productController = {
    product: (req, res) => {
        let idInstrumento = req.params.id

        db.Products.findAll({
            where: {
                id: idInstrumento
                
            }
        })
        .then((producto)=>{
            db.Usuarios.findAll({
                where: {
                    id : producto[0].creado_por
                }
            })
        .then((usuario)=>{
            let creadoPor = usuario[0].dataValues

       producto.forEach(element => {
        db.Comentarios.findAll({
               
            where: {
                id_producto_comentado: element.dataValues.id
            }
        
        })
         .then((comentarios)=>{
        //     let usuarioComentador = []
            //for(let i = 0; i < comentarios.length; i++){
            // db.Usuarios.findByPk(comentarios[i].id_autor)
                // .then((usuarioComentadorr)=>{
                //         usuarioComentador.push(usuarioComentadorr)

                        // for (let a = 0; a < usuarioComentador.length; a++) {
                        //     if (usuarioComentador[a].id == comentarios[i].id_autor) {
                        //         let coment = usuarioComentador[a]
                        //         console.log(coment.username);
            res.render('product', {producto: producto, idSearch: idInstrumento, usuario: usuario, creador: creadoPor, infoComentarios: comentarios})
                        //     }
                            
                        // }
                   
               // })

                
            //}
            // if (usuarios[5].idsDeLosProductosCreados.includes(productos[idInstrumento].id)) {
               
            // }
            // else{
            //     res.render('product-no-editable', {producto: productos, idSearch: idInstrumento, usuario: usuarios, creador: arrayCreadoPor, infoComentarios: comentarios})
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
        .catch((error)=>{
            return res.send(error)
        })


        
    },
    productAdd: (req, res) => {

        res.render('product-add', {producto: instrumentos.lista})
    },  
      productSum: (req, res) => {
          let producto = {
              marca: req.body.marca,
              modelo: req.body.modelo,
              nombre_producto: req.body.nombre,
              fecha_de_creacion: req.body.fecha,
              descripcion: req.body.descripcion,
              creado_por: 5,
              foto_product: req.body.foto,
              precio: req.body.precio
          }
          console.log(producto);
            db.Products.create(producto)
            .then(()=>{
                res.redirect("/profile/5")
            })
            .catch((error)=>{
                return res.send(error)
            })
    },

    productEdit: (req, res) => {
        let id = req.params.id
        res.render('product-edit', {producto: instrumentos.lista, idSearch: id})
    },
}

module.exports = productController;