let instrumentos = require('../data/index')
const db = require('../database/models')

let productController = {
    product: (req, res) => {
        let idInstrumento = req.params.id

        let arrayCreadoPor = []
        for(let i = 0; i < instrumentos.usuarios.length; i++){
            if(instrumentos.usuarios[i].id == instrumentos.lista[idInstrumento].creadoPor){
                arrayCreadoPor.push(instrumentos.usuarios[i])
            }
        }

        let comentarioss = []
        for(let i = 0; i < instrumentos.lista[idInstrumento].comentarios.length; i++){
            for(let a = 0; a < instrumentos.usuarios.length; a++){
                if(instrumentos.lista[idInstrumento].comentarios[i].usuarioQueComento == instrumentos.usuarios[a].id){
                    comentarioss.push(instrumentos.usuarios[a])
                }
            }
        }

        if (instrumentos.usuarios[5].idsDeLosProductosCreados.includes(instrumentos.lista[idInstrumento].id)) {
            res.render('product', {producto: instrumentos.lista, idSearch: idInstrumento, usuario: instrumentos.usuarios, creador: arrayCreadoPor, infoComentarios: comentarioss})
        }
        else{
            res.render('product-no-editable', {producto: instrumentos.lista, idSearch: idInstrumento, usuario: instrumentos.usuarios, creador: arrayCreadoPor, infoComentarios: comentarioss})
        }


        
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