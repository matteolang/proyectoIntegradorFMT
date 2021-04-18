let instrumentos = require('../data/index')
const { json } = require('express')

let mainController = {
    index: (req, res) => {
        res.render('index', {instrumentitos: instrumentos.lista})
    },
    searchResults: (req, res) => {

        let search = req.query.searchResults

        let result = []
        for( let i = 0; i < instrumentos.lista.length; i++){
            var nombreMarcaModelo = instrumentos.lista[i].nombreDelInstrumento.toLowerCase() + ' ' + instrumentos.lista[i].marca.toLowerCase() + ' ' + instrumentos.lista[i].modelo.toLowerCase()
            var nombreModelo = instrumentos.lista[i].nombreDelInstrumento.toLowerCase() + ' ' + instrumentos.lista[i].modelo.toLowerCase()
            if(instrumentos.lista[i].nombreDelInstrumento.toLowerCase().includes(search.toLowerCase()) || instrumentos.lista[i].marca.toLowerCase().includes(search.toLowerCase()) || instrumentos.lista[i].modelo.toLowerCase().includes(search.toLowerCase())){
                result.push(instrumentos.lista[i])
            }
            else if(nombreMarcaModelo.includes(search.toLowerCase()) || nombreModelo.includes(search.toLowerCase())){
                result.push(instrumentos.lista[i])
            }
        }
        res.render('search-results', {resultadoSearch: result, instrumentitos: instrumentos.lista, parametroSearch: search})
    },
}

module.exports = mainController;