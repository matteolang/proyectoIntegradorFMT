let instrumentos = require("../data/index");
const db = require("../database/models");
const currentDate = Date.now();
const Swal = require('sweetalert2');
const { where, Error } = require("sequelize");

let productController = {
  product: (req, res) => {
    
    let idInstrumento = req.params.id;

    db.Products.findByPk(idInstrumento, {
      include: [{ association: "creador" }],
    })
      .then((producto) => {
        db.Comentarios.findAll({
          where: {
            id_producto_comentado: producto.id,
          },
          include: [{ association: "autor" }],
          order: [["createdAt", "DESC"]]
        })
          .then((comentarios) => {
            res.render("product", {
              producto: producto,
              comentarios: comentarios,
            });
          })
          .catch((error) => {
            return res.send(error);
          });
      })
      .catch((error) => {
        return res.send(error);
      });
  },
  comentario: (req, res) => {
    let idInstrumento = req.params.id;
    let comentario = {
      comentario: req.body.comentario,
      id_producto_comentado: idInstrumento,
      id_autor: req.session.user.id,
      fecha_de_creacion: currentDate,
      
    };

    db.Comentarios.create(comentario)
      .then(() => {

        db.Comentarios.count({
            where: {
                id_producto_comentado: idInstrumento
            }
        })
        .then((count)=>{
            db.Products.update({cantidad_de_comentarios: count}, {where: {id: idInstrumento}} )
            .then(()=>{
              db.Comentarios.count({where: {id_autor: req.session.user.id}})
              .then((countt)=>{
                db.Usuarios.update({comentarios: countt}, {where: {id: req.session.user.id}})
                .then(()=>{
                  res.redirect("/product/id/" + idInstrumento)
                })
                .catch((error)=>{
                  return res.send(error)
                })
              })
              .catch((error)=>{
                return res.send(error)
              })
                
            })
            .catch((error)=>{
                return res.send(error)
            })
         
        })
        .catch((error)=>{
            return res.send(error)
        })

         
      })
      .catch((error) => {
        return res.send(error);
      });
  },
  productAdd: (req, res) => {
    res.render("product-add");
  },
  productSum: (req, res) => {
    let producto = {
      marca: req.body.marca,
      modelo: req.body.modelo,
      nombre_producto: req.body.nombre,
      fecha_de_creacion: currentDate,
      descripcion: req.body.descripcion,
      creado_por: req.session.user.id,
      foto_product: req.file.filename,
      precio: req.body.precio,
    };

    db.Products.create(producto)
      .then((productoo) => {
        db.ProductosCreados.create({
          usuario_id: req.session.user.id,
          producto_id: productoo.id,
        })
          .then(() => {
                 db.Products.count({where: {creado_por: producto.creado_por}})
                 .then((count)=>{
                    db.Usuarios.update({cantidad_de_productos: count}, {where: {id: productoo.creado_por}})
                    .then(()=>{
                        
                        res.redirect("/profile/" + req.session.user.id);
                    })
                    .catch((error)=>{
                        return res.send(error)
                    })
                 })
                 .catch((error)=>{
                     return res.send(error)
                 })       
          })
          .catch((error) => {
            return res.send(error);
          });
      })
      .catch((error) => {
        return res.send(error);
      });
  },

  productEdit: (req, res) => {
    let idInstrumento = req.params.id;

    db.Products.findAll({
      where: {
        id: idInstrumento,
      },
    })
      .then((producto) => {
        res.render("product-edit", { producto: producto });
      })
      .catch((error) => {
        return res.send(error);
      });
  },
  productChange: (req, res) => {
    let idInstrumento = req.params.id;

    let producto = {
      marca: req.body.marca,
      modelo: req.body.modelo,
      nombre_producto: req.body.nombre,
      descripcion: req.body.descripcion,
      creado_por: req.session.user.id,
      foto_product: req.file.filename,
      precio: req.body.precio,
    };

  db.Products.update(producto, {
    where: {
      id: idInstrumento,
    },
  })
    .then((resultados) => {
      res.redirect("/profile/" + req.session.user.id);
    })
    .catch((error) => {
      return res.send(error);
    });

    
  },
  eliminar: (req, res) => {
    
    let idInstrumento = req.params.id;
    db.Products.findByPk(idInstrumento)
    .then((productoEnCuestion)=>{
      if(productoEnCuestion.creado_por == req.session.user.id){
        db.Comentarios.destroy({
          where: {
            id_producto_comentado: idInstrumento,
          },
        })
          .then(() => {
            db.ProductosCreados.destroy({
              where: {
                producto_id: idInstrumento,
              },
            })
    
              .then(() => {
                  db.Products.findByPk(idInstrumento)
                  .then((producto)=>{
                    db.Products.destroy({
                        where: {
                          id: idInstrumento,
                        },
                      })
                        .then((k) => {
                            
                            db.Products.count({where: {creado_por: producto.creado_por}})
                            .then((count)=>{
                                console.log(count)
                                db.Usuarios.update({cantidad_de_productos: count}, {where: {id: producto.creado_por}})
                                .then(()=>{
                                  db.Comentarios.count({where: {id_autor: req.session.user.id}})
                                  .then((counttt)=>{
                                    db.Usuarios.update({comentarios: counttt}, {where: {id: req.session.user.id}})
                                    .then(()=>{
                                      return res.redirect("/profile/" + req.session.user.id);
                                    })
                                    .catch((error)=>{
                                      return res.send(error)
                                    })
                                   
                                  })
                                  .catch((error)=>{
                                    return res.send(error)
                                  })
                                  
                                })
                                .catch(()=>{
                                    return res.send(error)
                                })
                             
                            })
                            .catch((error)=>{
                                return res.send(error)
                            })
                          
                        })
                        .catch((error) => {
                          return res.send(error);
                        });
                  })
                  .catch((error)=>{
                      return res.send(error)
                  })
             
              })
              .catch((error) => {
                return res.send(error);
              });
          })
          .catch((error) => {
            return res.send(error);
          });
    
      }
      else {
        res.redirect("../product/id/"+idInstrumento)
      }
    })
    .catch((error)=>{
      return res.send(error)
    })
    
    
  },
  borrar: (req, res) => {
    let idComentario = req.params.comentario;
    let idInstrumento = req.params.id;
    db.Comentarios.destroy({
      where: {
        id: idComentario,
      },
    })
    .then((comentario) => {
        db.Comentarios.count({
            where: {
                id_producto_comentado: idInstrumento
            }
        })
        .then((count)=>{
            db.Products.update({cantidad_de_comentarios: count}, {where: {id: idInstrumento}} )
            .then(()=>{
              db.Comentarios.count({where: {id_autor: req.session.user.id}})
              .then((countt)=>{
                db.Usuarios.update({comentarios: countt}, {where: {id: req.session.user.id}})
                .then(()=>{
                  return res.redirect("/product/id/" + idInstrumento);
                })
                .catch((error)=>{
                  return res.send(error)
                })
              })
              .catch((error)=>{
                return res.send(error)
              })
                
            })
            .catch((error)=>{
                return res.send(error)
            })
         
        })
        .catch((error)=>{
            return res.send(error)
        })

      
    })
    .catch((error)=>{
        return res.send(error)
    })
  },
};

module.exports = productController;
