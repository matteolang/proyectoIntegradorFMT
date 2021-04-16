let instrumentos = {
    lista: [ 
    { id:0,
    nombreDelInstrumento: "trompeta",
    marca: "Yamaha",
    modelo: "K-40",
    fechaDeCreacion: "2/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/ytr2330-650x650.jpg" ,
    comentarios: ['Bueno', 'Tremendo', 'Malo', 'Increible', 'Estaba roto']
},

    { id:1,
    nombreDelInstrumento: "trombón",
    marca: "Yamaha",
    modelo: "WD-45",
    fechaDeCreacion: "3/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/ysl154-650x650.jpg",
    comentarios: ['Bueno', 'Tremendo', 'Malo', 'Increible']
},

    {id:2,
    nombreDelInstrumento: "clarinete",
    marca: "Júpiter",
    modelo: "ZK200",
    fechaDeCreacion: "4/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/ycl255-650x650.jpg",
    comentarios: ['Bueno', 'Tremendo', 'Malo', 'Increible', 'Estaba roto']
},

    {id:3,
    nombreDelInstrumento: "guitarra electrica",
    marca: "Fender",
    modelo: "Stratocaster",
    fechaDeCreacion: "5/3/2021",
    imagen: "https://famauy.xprostore.com/image/cache/data/imagenesweb/lps18odch1-650x650.jpg",
    comentarios: ['Bueno', 'Tremendo', 'Malo']
},

    {id:4,
    nombreDelInstrumento: "bajo",
    marca: "Fender",
    modelo: "KK12",
    fechaDeCreacion: "6/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/gb34jj-3ts-650x650.jpg", 
    comentarios: ['Bueno', 'Tremendo', 'Malo', 'Increible', 'Estaba roto']
},

    {id:5,
    nombreDelInstrumento: "bateria",
    marca: "Mapex",
    modelo: "GW150",
    fechaDeCreacion: "7/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/rli52kh4sw-650x650.jpg",
    comentarios: [ 'Estaba roto']
},

    {id:6,
    nombreDelInstrumento: "violin",
    marca: "Stentor",
    modelo: "AF-70",
    fechaDeCreacion: "8/3/2021",
    imagen: "https://www.yulmar.com.ar/fotos/articulos/1661333415-Violin-Estudio-Stradella-1-2-Estuche-Resina-Arco.jpg", 
    comentarios: ['Bueno', 'Tremendo', 'Malo', 'Increible', 'Estaba roto']
},

    {id:7,
    nombreDelInstrumento: "guitarra acústica",
    marca: "Seagull",
    modelo: "S6",
    fechaDeCreacion: "9/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/earth100-ns-650x650.jpg", 
    comentarios: ['Bueno', 'Tremendo']
},

    {id:8,
    nombreDelInstrumento: "flauta dulce",
    marca: "Yamaha",
    modelo: "YRS-32B",
    fechaDeCreacion: "10/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/yrs20g-b-650x650.jpg", 
    comentarios: ['Bueno', 'Tremendo', 'Malo', 'Increible', 'Estaba roto']
},

    {id:9,
    nombreDelInstrumento: "flauta traversa",
    marca: "Pearl",
    modelo: "505e1r",
    fechaDeCreacion: "11/3/2021",
    imagen: "https://www.yulmar.com.ar/fotos/articulos/1793420292-Flauta-Traversa-Wisemann-Dfl-310-Plateada-16-Llaves-Estuche.jpg", 
    comentarios: [ 'Estaba roto']
},

    {id:10,
    nombreDelInstrumento: "fagot",
    marca: "Hercules",
    modelo: "Ds561b",
    fechaDeCreacion: "12/3/2021",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPX4XWY8VTR5OXlxCiGbHrkMakqMcWKZ4m5C5P1KP7xg61_R3rVE5m55QMV8I0n75uWhk&usqp=CAU", 
    comentarios: ['Bueno', 'Tremendo', 'Malo', 'Increible', 'Estaba roto']
},

    {id:11,
    nombreDelInstrumento: "tambor",
    marca: "Tambora",
    modelo: "Q11",
    fechaDeCreacion: "13/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/taj-12-t2-650x650.jpg", 
    comentarios: ['Bueno', 'Estaba roto']
},

    {id:12,
    nombreDelInstrumento: "maracas",
    marca: "Onix",
    modelo: "S6",
    fechaDeCreacion: "14/3/2021",
    imagen: "https://cl.xprostore.com/image/cache/data/imagenesweb/tmp-b-650x650.jpg", 
    comentarios: ['Bueno', 'Tremendo', 'Malo', 'Increible', 'Estaba roto'] },

    {id:13,
    nombreDelInstrumento: "triangulo",
    marca: "Castelli",
    modelo: "Z10",
    fechaDeCreacion: "15/3/2021",
    imagen: "https://famauy.xprostore.com/image/cache/data/imagenesweb/cr-p006-00-650x650h.jpg", 
    comentarios: ['Bueno', 'Malo', 'Increible', 'Estaba roto'] },

    {id:14,
    nombreDelInstrumento: "arpa",
    marca: "Walter",
    modelo: "J900",
    fechaDeCreacion: "16/3/2021",
    imagen: "https://www.cdbp.patrimoniocultural.gob.cl/652/articles-79173_imagen_06.jpg", 
    comentarios: ['Bueno', 'Tremendo', 'Malo', 'Increible', 'Estaba roto'] },

    {id:15,
    nombreDelInstrumento: "Ukelele",
    marca: "Cordoba",
    modelo: "Tenor",
    fechaDeCreacion: "17/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/ma-s-650x650.jpg", 
    comentarios: ['Bueno', 'Tremendo'] },
    ],
}

module.exports = instrumentos