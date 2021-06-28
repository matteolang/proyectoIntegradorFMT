const { json } = require('express')
const db = require('../database/models')
const op = db.Sequelize.Op;

let mainController = {
    index: (req, res) => {

         
        
        db.Products.findAll({
            include: [
                {association: 'creador'},
                {association: 'comentarios'}
            ]
        })
        .then((productos)=>{

                db.Products.findAll({
                    order: [
                        ["precio", "ASC"]
                    ],
                    limit:4,
                    include: [
                        {association: 'creador'},
                        {association: 'comentarios'}
                    ]
                })
                .then((masBaratos)=>{

                    db.Products.findAll({
                        order: [
                            ["fecha_de_creacion", "DESC"]
                        ],
                        limit:4,
                        
                            include: [
                                {association: 'creador'},
                                {association: 'comentarios'}
                            ]
                        
                    })
                    .then((masNuevos)=>{
                        db.Products.findAll({
                            order: [
                                ["cantidad_de_comentarios", "DESC"]
                            ],
                            limit:4,
                            
                              include: [
                                    {association: 'creador'},
                                    {association: 'comentarios'}
                                ]
                            
                        })
                        .then((masComentados)=>{
                            res.render('index', {masComentados: masComentados, instrumentitos: productos, comentarios:productos.comentarios, masBaratos: masBaratos, masNuevos: masNuevos}) 
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
    searchResults: (req, res) => {
         
        let search = req.query.searchResults

        const result = []

        const comentariosDeBuscados = []

        if (search == '') {
            res.render('search-results-no-ingreso-ningun-valor')
        } 

          db.Products.count({
              where: {
                [op.or]: [{nombre_producto: {[op.like]: `%${search}%`}}, {marca: {[op.like]: `%${search}%`}}, {modelo: {[op.like]: `%${search}%`}}, {descripcion: {[op.like]: `%${search}%`}}]
              }
          })
          .then((count)=>{  

            if(count > 0){

            db.Products.findAll({
                where: {
                    [op.or]: [{nombre_producto: {[op.like]: `%${search}%`}}, {marca: {[op.like]: `%${search}%`}}, {modelo: {[op.like]: `%${search}%`}}, {descripcion: {[op.like]: `%${search}%`}}],
                },
                include: [
                    {association: 'creador'},
                    {association: 'comentarios'}
                ]
            })
            .then((resultados)=>{
                console.log(search)
                for(let i = 0; i < resultados.length; i++){
                    result.push(resultados[i].dataValues)

                    db.Comentarios.findAll({
                        where: {
                            id_producto_comentado: resultados[i].id
                        }
                    })
                    .then((comentarios)=>{

                        for(let a = 0; a < comentarios.length; a++){
               
                        comentariosDeBuscados.push(comentarios[a].dataValues)
                        }
                        if(result.length > 0){
                            return res.render('search-results-encontrados', {resultadoSearch: result, parametroSearch: search, comentariosDeBuscados: comentariosDeBuscados})
                        }
                    })
                    .catch((error)=>{
                        return res.send(error)
                    })

                }
            })
            .catch((error)=>{
                return res.send(error)
            })
    
            } 
            else {
                res.render('search-results-no-encontrados')
            }
        })
    
    },
}

module.exports = mainController;