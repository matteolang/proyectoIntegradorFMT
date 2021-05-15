let instrumentos = require('../data/index')
const { json } = require('express')
const db = require('../database/models')
const op = db.Sequelize.Op;

let mainController = {
    index: (req, res) => {



        // db.Products.findAll({
        //     order: [
        //         ["fecha_de_creacion", "ASC"]
        //     ],
        //     limit:4
        //  })
        //  .then((masNuevos)=>{
        //  db.Comentarios.findAll({
        //  })
        //  .then((comentarios)=>{
        //      res.render('index', {masNuevos: masNuevos, comentarios:comentarios, instrumentitos: productos, masBaratos: masBaratos}) 
        //      })
        //  .catch((error)=>{
        //      return res.send(error)
        //   })
        //  })
        //  .catch((error)=>{
        //      return res.send(error)
        //  })


         
        db.Products.findAll({

        })
        .then((productos)=>{
        db.Comentarios.findAll({
        })
        .then((comentarios)=>{
            db.Products.findAll({
                order: [
                    ["precio", "ASC"]
                ],
                limit:4
             })
             .then((masBaratos)=>{


         db.Products.findAll({
             order: [
                ["fecha_de_creacion", "DESC"]
            ],
             limit:4
          })
          .then((masNuevos)=>{
            res.render('index', {instrumentitos: productos, comentarios:comentarios, masBaratos: masBaratos, masNuevos: masNuevos}) 
        })  
        })
            })
        .catch((error)=>{
            return res.send(error)
         })
        })
        .catch((error)=>{
            return res.send(error)
        })




        // db.Products.findAll({
        //     order: [
        //         ["precio", "ASC"]
        //     ],
        //     limit:4
        //  })
        //  .then((masBaratos)=>{
        //  db.Comentarios.findAll({
        //  })
        //  .then((comentarios)=>{
        //      res.render('index', {masBaratos: masBaratos, comentarios:comentarios}) 
        //      })
        //  .catch((error)=>{
        //      return res.send(error)
        //   })
        //  })
        //  .catch((error)=>{
        //      return res.send(error)
        //  })

        // let instrumentosConMasComentarios = []
        // for(let i = 0; i < instrumentos.lista.length; i++){
        //     if(instrumentos.lista[i].comentarios.length == 5){
        //         instrumentosConMasComentarios.push(instrumentos.lista[i])
        //     }
        // }

        // let instrumentosMasBaratos = []
        // for(let i = 0; i < instrumentos.lista.length; i++){
        //     if(instrumentos.lista[i].precio < 60){
        //         instrumentosMasBaratos.push(instrumentos.lista[i])
        //     }
        // }

       
    },
    searchResults: (req, res) => {

        let search = req.query.searchResults

        let result = []
        let comentariosDeBuscados = []
       // for( let i = 0; i < instrumentos.lista.length; i++){
         //   var nombreMarcaModelo = instrumentos.lista[i].nombreDelInstrumento.toLowerCase() + ' ' + instrumentos.lista[i].marca.toLowerCase() + ' ' + instrumentos.lista[i].modelo.toLowerCase()
           // var nombreModelo = instrumentos.lista[i].nombreDelInstrumento.toLowerCase() + ' ' + instrumentos.lista[i].modelo.toLowerCase()
            //if(instrumentos.lista[i].nombreDelInstrumento.toLowerCase().includes(search.toLowerCase()) || instrumentos.lista[i].marca.toLowerCase().includes(search.toLowerCase()) || instrumentos.lista[i].modelo.toLowerCase().includes(search.toLowerCase())){
              //  result.push(instrumentos.lista[i])
            //}
            //else if(nombreMarcaModelo.includes(search.toLowerCase()) || nombreModelo.includes(search.toLowerCase())){
              //  result.push(instrumentos.lista[i])
            //}
        //}
        db.Products.findAll({
            where: {
                [op.or]: [{nombre_producto: {[op.like]: `%${search}%`}}, {marca: {[op.like]: `%${search}%`}}, {modelo: {[op.like]: `%${search}%`}}],
                
            }
        },)
        .then((resultados)=>{

            for(let i = 0; i < resultados.length; i++){
            result.push(resultados[i].dataValues)

            db.Comentarios.findAll({
                where: {
                    id_producto_comentado: resultados[i].id
                }
            })
            .then((comentarios)=>{
                for(let a = 0; a < comentarios.length; a++){
               // if(resultado){
                comentariosDeBuscados.push(comentarios[a].dataValues)
                //}
            }
                 
            })
            .catch((error)=>{
                return res.send(error)
            })

            }
            

            if(result.length == 0){

                res.render('search-results-no-encontrados')
            }
            if (search == '') {
                res.render('search-results-no-ingreso-ningun-valor')
            }
            else {
                res.render('search-results-encontrados', {resultadoSearch: result, parametroSearch: search, comentariosDeBuscados: comentariosDeBuscados})
            }

        })
        .catch((error)=>{
           return res.send(error)
        })

     
        
       
    },
}

module.exports = mainController;