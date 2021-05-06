const db = require('../database/models')

// findAll = SELECT * FROM usuarios en SQL

let sequelizeController = {
    usuarios: (req, res) => {
        let usuarios = db.Usuarios.findAll()
        .then((resultados) => {
            return res.send(resultados)
        })
        .catch((error) => {
           return res.send(error)
        })
    },
    products: (req, res) => {
        let products = db.Products.findAll()
        .then((resultados) => {
            return res.send(resultados)
        })
        .catch((error) => {
           return res.send(error)
        })
    },
    comentarios: (req, res) => {
        let comentarios = db.Comentarios.findAll()
        .then((resultados) => {
            return res.send(resultados)
        })
        .catch((error) => {
           return res.send(error)
        })
    },
    productosCreados: (req, res) => {
        let productosCreados = db.ProductosCreados.findAll()
        .then((resultados) => {
            return res.send(resultados)
        })
        .catch((error) => {
           return res.send(error)
        })
    }
}

module.exports = sequelizeController