let instrumentos = {
    lista: [ 
    { id:0,
    nombreDelInstrumento: "Trompeta",
    marca: "Yamaha",
    modelo: "K-40",
    fechaDeCreacion: "2/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/ytr2330-650x650.jpg" ,
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Tremendo'}, {usuarioQueComento: 'frizzi', comentario:'Malo'}, {usuarioQueComento: 'tmasic', comentario:'Increible'}, {usuarioQueComento: 'iromani', comentario:'Estaba Roto'}]
},

    { id:1,
    nombreDelInstrumento: "Trombon",
    marca: "Yamaha",
    modelo: "WD-45",
    fechaDeCreacion: "3/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/ysl154-650x650.jpg",
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Tremendo'}, {usuarioQueComento: 'tmasic', comentario:'Malo'}, {usuarioQueComento: 'iromani', comentario:'Increible'}]
},

    {id:2,
    nombreDelInstrumento: "Clarinete",
    marca: "Jupiter",
    modelo: "ZK200",
    fechaDeCreacion: "4/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/ycl255-650x650.jpg",
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mheber', comentario:'Tremendo'}, {usuarioQueComento: 'frizzi', comentario:'Malo'}, {usuarioQueComento: 'mheber', comentario:'Increible'}, {usuarioQueComento: 'tmasic', comentario:'Estaba Roto'}]
},

    {id:3,
    nombreDelInstrumento: "Guitarra Electrica",
    marca: "Fender",
    modelo: "Stratocaster",
    fechaDeCreacion: "5/3/2021",
    imagen: "https://famauy.xprostore.com/image/cache/data/imagenesweb/lps18odch1-650x650.jpg",
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'iromani', comentario:'Tremendo'}, {usuarioQueComento: 'mlang', comentario:'Malo'}]
},

    {id:4,
    nombreDelInstrumento: "Bajo",
    marca: "Fender",
    modelo: "KK12",
    fechaDeCreacion: "6/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/gb34jj-3ts-650x650.jpg", 
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Tremendo'}, {usuarioQueComento: 'frizzi', comentario:'Malo'}, {usuarioQueComento: 'tmasic', comentario:'Increible'}, {usuarioQueComento: 'iromani', comentario:'Estaba Roto'}]
},

    {id:5,
    nombreDelInstrumento: "Bateria",
    marca: "Mapex",
    modelo: "GW150",
    fechaDeCreacion: "7/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/rli52kh4sw-650x650.jpg",
    comentarios: [ {usuarioQueComento: 'mheber', comentario:'Bueno'}]
},

    {id:6,
    nombreDelInstrumento: "Violin",
    marca: "Stentor",
    modelo: "AF-70",
    fechaDeCreacion: "8/3/2021",
    imagen: "https://www.yulmar.com.ar/fotos/articulos/1661333415-Violin-Estudio-Stradella-1-2-Estuche-Resina-Arco.jpg", 
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Tremendo'}, {usuarioQueComento: 'tmasic', comentario:'Malo'}, {usuarioQueComento: 'iromani', comentario:'Increible'}, {usuarioQueComento: 'frizzi', comentario:'Estaba Roto'}]
},

    {id:7,
    nombreDelInstrumento: "Guitarra Acústica",
    marca: "Seagull",
    modelo: "S6",
    fechaDeCreacion: "9/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/earth100-ns-650x650.jpg", 
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Tremendo'}]
},

    {id:8,
    nombreDelInstrumento: "Flauta Dulce",
    marca: "Yamaha",
    modelo: "YRS-32B",
    fechaDeCreacion: "10/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/yrs20g-b-650x650.jpg", 
    comentarios: [{usuarioQueComento: 'mlang', comentario:'Bueno'}, {usuarioQueComento: 'tmasic', comentario:'Tremendo'}, {usuarioQueComento: 'mheber', comentario:'Malo'}, {usuarioQueComento: 'iromani', comentario:'Tremendo'}, {usuarioQueComento: 'frizzi', comentario:'Estab Roto'}]
},

    {id:9,
    nombreDelInstrumento: "Flauta Traversa",
    marca: "Pearl",
    modelo: "505e1r",
    fechaDeCreacion: "11/3/2021",
    imagen: "https://www.yulmar.com.ar/fotos/articulos/1793420292-Flauta-Traversa-Wisemann-Dfl-310-Plateada-16-Llaves-Estuche.jpg", 
    comentarios: [ {usuarioQueComento: 'mlang', comentario:'Tremendo'}]
},

    {id:10,
    nombreDelInstrumento: "Fagot",
    marca: "Hercules",
    modelo: "Ds561b",
    fechaDeCreacion: "12/3/2021",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPX4XWY8VTR5OXlxCiGbHrkMakqMcWKZ4m5C5P1KP7xg61_R3rVE5m55QMV8I0n75uWhk&usqp=CAU", 
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Tremendo'}, {usuarioQueComento: 'tmasic', comentario:'Malo'}, {usuarioQueComento: 'iromani', comentario:'Buenisimo'}, {usuarioQueComento: 'frizzi', comentario:'Estaba Roto'}]
},

    {id:11,
    nombreDelInstrumento: "Tambor",
    marca: "Tambora",
    modelo: "Q11",
    fechaDeCreacion: "13/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/taj-12-t2-650x650.jpg", 
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'frizzi', comentario:'Estaba Roto'}]
},

    {id:12,
    nombreDelInstrumento: "Maracas",
    marca: "Onix",
    modelo: "S6",
    fechaDeCreacion: "14/3/2021",
    imagen: "https://cl.xprostore.com/image/cache/data/imagenesweb/tmp-b-650x650.jpg", 
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Tremendo'}, {usuarioQueComento: 'iromani', comentario:'Malo'}, {usuarioQueComento: 'frizzi', comentario:'Increible'}, {usuarioQueComento: 'tmasic', comentario:'Estaba Roto'}] },

    {id:13,
    nombreDelInstrumento: "Triangulo",
    marca: "Castelli",
    modelo: "Z10",
    fechaDeCreacion: "15/3/2021",
    imagen: "https://famauy.xprostore.com/image/cache/data/imagenesweb/cr-p006-00-650x650h.jpg", 
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Malo'},{usuarioQueComento: 'tmasic', comentario:'Increible'}, {usuarioQueComento: 'frizzi', comentario:'Estaba Roto'}] },

    {id:14,
    nombreDelInstrumento: "Arpa",
    marca: "Walter",
    modelo: "J900",
    fechaDeCreacion: "16/3/2021",
    imagen: "https://www.cdbp.patrimoniocultural.gob.cl/652/articles-79173_imagen_06.jpg", 
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Tremendo'}, {usuarioQueComento: 'tmasic', comentario:'Malo'}, {usuarioQueComento: 'frizzi', comentario:'Increible'}, {usuarioQueComento: 'iromani', comentario:'Estaba roto'}] },

    {id:15,
    nombreDelInstrumento: "Ukelele",
    marca: "Cordoba",
    modelo: "Tenor",
    fechaDeCreacion: "17/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/ma-s-650x650.jpg", 
    comentarios: [{usuarioQueComento: 'frizzi', comentario:'Bueno'}, {usuarioQueComento: 'iromani', comentario:'Tremendo'}] },
    ],
usuarios: [
    {
        username: 'frizzi',
        fechaDeNacimiento: new Date('12-12-2001'),
        clave: 'abc1',
        cantidadDeProductos: 9,
        seguidores: 25,
        comentarios: 35,
        fotoDePerfil: 'https://i.ibb.co/y0PkCDW/foto-fran.jpg'
    },
    {
        username: 'mlang',
        fechaDeNacimiento: new Date('11-10-2001'),
        clave: 'abbc2',
        cantidadDeProductos: 5,
        seguidores: 921,
        comentarios: 22,
        fotoDePerfil: 'https://i.ibb.co/Tq9WPQ1/8-B93527-F-638-F-4-CED-823-C-3-B85-A27-BFD48.jpg'
    },
    {
        username: 'tmasic',
        fechaDeNacimiento: new Date('10-12-2001'),
        clave: 'abccc1',
        cantidadDeProductos: 8,
        seguidores: 140,
        comentarios: 30,
        fotoDePerfil: 'https://i.ibb.co/Gnx8cjt/foto-timo.jpg'
    },
    {
        username: 'mheber',
        fechaDeNacimiento: new Date('02-12-1995'),
        clave: 'abcde11',
        cantidadDeProductos: 4,
        seguidores: 110,
        comentarios: 17,
        fotoDePerfil: 'https://media-exp1.licdn.com/dms/image/C5603AQGBiazQ36HrmQ/profile-displayphoto-shrink_200_200/0/1564075095565?e=1622678400&v=beta&t=zfFgeZI4Fljf6OSTnkamWPVW0guJV8uwka5MAwnIvgs'
    },
    {
        username: 'iromani',
        fechaDeNacimiento: new Date('12-03-1990'),
        clave: 'abcd10',
        cantidadDeProductos: 6,
        seguidores: 100,
        comentarios: 23,
        fotoDePerfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2oE02pX4mrruguaB5nyv-l0uIpvT9re_bQmTHjlrYhw68_gMBzuiaT3dEdpuh9bxTE60&usqp=CAU'
    },
]
}

module.exports = instrumentos