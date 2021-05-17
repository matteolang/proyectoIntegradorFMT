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

            if (producto[0].creado_por == 5) {
            res.render('product', {producto: producto, idSearch: idInstrumento, usuario: usuario, creador: creadoPor, infoComentarios: comentarios})
             }
                else{
                  res.render('product-no-editable', {producto: producto, idSearch: idInstrumento, usuario: usuario, creador: creadoPor, infoComentarios: comentarios})
                     }            
                        // }
                   
               // })

                
            //}
               
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


        
    },comentario: (req,res) =>{
        let idInstrumento = req.params.id
        let comentario = {
            comentario: req.body.comentario,
            id_producto_comentado: idInstrumento,
            id_autor: 5,
            fecha_de_creacion: 2021-03-05,
            foto_autor: "https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png"
        }
          db.Comentarios.create(comentario)
          .then(()=>{
              res.redirect("/product/id/"+idInstrumento)
          })
          .catch((error)=>{
              return res.send(error)
          })

    },
    productAdd: (req, res) => {

        res.render('product-add', {})
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
            db.Products.create(producto)
            .then(()=>{
                res.redirect("/profile/5")
            })
            .catch((error)=>{
                return res.send(error)
            })
    },

    productEdit: (req, res) => {
        let idInstrumento = req.params.id
        db.Products.findAll({
            where: {
                id: idInstrumento
                
            }
        })
        .then((producto)=>{
               
            res.render('product-edit', {producto: producto})
  
        })

    },
    productChange: (req,res) => {

        let idInstrumento = req.params.id
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
          db.Products.update(
              {
                nombre_producto: req.body.nombre,
                marca: req.body.marca,
                modelo: req.body.modelo,
                fecha_de_creacion: req.body.fecha,
                descripcion: req.body.descripcion,
                creado_por: 5,
                foto_product: req.body.foto,
                precio: req.body.precio

              },
              {
                  where: {
                      id: idInstrumento
                  }
              }
          )
          .then((resultados)=>{
              res.redirect("/profile/5")
          })
          .catch((error)=>{
              return res.send(error)
          })


    }


}

module.exports = productController;