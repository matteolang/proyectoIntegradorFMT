let instrumentos = require('../data/index')
const db = require('../database/models')
const Usuarios = require('../database/models/Usuarios')
const currentDate = new Date

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
            
                        if (producto[0].creado_por == req.session.user.id) {
                                res.render('product', {producto: producto, idSearch: idInstrumento, usuario: usuario, creador: creadoPor, infoComentarios: comentarios})
                        }
                        else {
                            res.render('product-no-editable', {producto: producto, idSearch: idInstrumento, usuario: usuario, creador: creadoPor, infoComentarios: comentarios})
                        }            

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

        
    },
    comentario: (req,res) =>{
        let idInstrumento = req.params.id
        let comentario = {
            comentario: req.body.comentario,
            id_producto_comentado: idInstrumento,
            id_autor: req.session.user.id,
            fecha_de_creacion: currentDate,
            foto_autor: req.session.user.foto_perfil
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
        res.render('product-add')
    },  
    productSum: (req, res) => {

          let producto = {
              marca: req.body.marca,
              modelo: req.body.modelo,
              nombre_producto: req.body.nombre,
              fecha_de_creacion: currentDate,
              descripcion: req.body.descripcion,
              creado_por: req.session.user.id,
              foto_product: req.body.foto,
              precio: req.body.precio
          }
            
            db.Products.create(producto)
            .then(()=>{
               // db.Usuarios.update(cantidad_de_productos: ) ARREGLAR ACA QUE CUANDO SE AGREGAN PRODUCTOS SE UPDATEA CANTIDAD_DE_PRODUCTOS DEL USUARIO Q LO CREO
                res.redirect("/profile/"+req.session.user.id)
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
        .catch((error)=>{
            return res.send(error)
        })

    },
    productChange: (req,res) => {

        let idInstrumento = req.params.id

        let producto = {
            marca: req.body.marca,
            modelo: req.body.modelo,
            nombre_producto: req.body.nombre,
            descripcion: req.body.descripcion,
            creado_por: req.session.user.id,
            foto_product: req.body.foto,
            precio: req.body.precio
        }
        
        db.Products.update(
            producto,
            {
                where: {
                    id: idInstrumento
                }
            }
        )
        .then((resultados)=>{
            res.redirect("/profile/"+req.session.user.id)
        })
        .catch((error)=>{
            return res.send(error)
        })


    }, 
    eliminar: (req,res) =>{
        let idInstrumento = req.params.id
        db.ProductosCreados.destroy({
            where:{
                producto_id: idInstrumento
            }

        })

        .then(()=>{
            
                db.Products.destroy({
                    where: {
                        id: idInstrumento
                    }
            })
            .then(()=>{
                 return res.redirect("/profile/"+req.session.user.id)
            })


           
        })
        .catch((error)=>{
            return res.send(error)
        })
        .catch((error)=>{
            return res.send(error)
        })
    }


}

module.exports = productController;