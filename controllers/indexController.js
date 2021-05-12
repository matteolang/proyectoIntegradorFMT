let instrumentos = require('../data/index')
const { json } = require('express')

let mainController = {
    index: (req, res) => {

        let instrumentosConMasComentarios = []
        for(let i = 0; i < instrumentos.lista.length; i++){
            if(instrumentos.lista[i].comentarios.length == 5){
                instrumentosConMasComentarios.push(instrumentos.lista[i])
            }
        }

        let instrumentosMasBaratos = []
        for(let i = 0; i < instrumentos.lista.length; i++){
            if(instrumentos.lista[i].precio < 60){
                instrumentosMasBaratos.push(instrumentos.lista[i])
            }
        }

        res.render('index', {instrumentitos: instrumentos.lista, masComentados: instrumentosConMasComentarios, masBaratos: instrumentosMasBaratos})
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

     
        
        if(result.length == 0){
            res.render('search-results-no-encontrados')
        }
        if (search == '') {
            res.render('search-results-no-ingreso-ningun-valor')
        }
        else {
            res.render('search-results-encontrados', {resultadoSearch: result, instrumentitos: instrumentos.lista, parametroSearch: search})
        }
    },
}

module.exports = mainController;