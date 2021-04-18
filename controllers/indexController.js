let instrumentos = require('../data/index')

let mainController = {
    index: (req, res) => {
        res.render('index', {instrumentitos: instrumentos.lista})
    },
    searchResults: (req, res) => {

        let search = req.query.searchResults

        let result = []
        for( let i = 0; i < instrumentos.lista.length; i++){
            if(instrumentos.lista[i].nombreDelInstrumento.toLowerCase().includes(search.toLowerCase()) || instrumentos.lista[i].marca.toLowerCase().includes(search.toLowerCase()) || instrumentos.lista[i].modelo.toLowerCase().includes(search.toLowerCase())){
                result.push(instrumentos.lista[i])
            }
        }
        res.render('search-results', {resultadoSearch: result, instrumentitos: instrumentos.lista})
    },
}

module.exports = mainController;