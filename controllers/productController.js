let instrumentos = require('../data/index')

let productController = {
    product: (req, res) => {
        let id = req.params.id
        res.render('product', {producto: instrumentos.lista, idSearch: id})
    },
    productAdd: (req, res) => {
        res.render('product-add', {})
    },
    productEdit: (req, res) => {
        let id = req.params.id
        res.render('product-edit', {producto: instrumentos.lista, idSearch: id})
    },
}

module.exports = productController;