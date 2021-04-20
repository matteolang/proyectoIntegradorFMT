let instrumentos = {
    lista: [ 
    { id:0,
    nombreDelInstrumento: "Trompeta",
    marca: "Yamaha",
    modelo: "K-40",
    fechaDeCreacion: "2/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/ytr2330-650x650.jpg" ,
    descripcion: 'Instrumento musical de viento , consistente en un tubo largo de metal que va ensanchándose desde la boquilla al pabellón y produce diversidad de sonidos según la fuerza con que la boca impele el aire.',
    creadoPor: 'frizzi',
    precio: 100,
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Tremendo'}, {usuarioQueComento: 'frizzi', comentario:'Malo'}, {usuarioQueComento: 'tmasic', comentario:'Increible'}, {usuarioQueComento: 'iromani', comentario:'Estaba Roto'}]
},

    { id:1,
    nombreDelInstrumento: "Trombon",
    marca: "Yamaha",
    modelo: "WD-45",
    fechaDeCreacion: "3/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/ysl154-650x650.jpg",
    descripcion: 'Instrumento musical de metal , especie de trompeta grande , y cuyos sonidos responden , según su clase , a las voces de tenor , contralto o bajo respectivamente.',
    creadoPor: 'mlang',
    precio: 120,
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Tremendo'}, {usuarioQueComento: 'tmasic', comentario:'Malo'}, {usuarioQueComento: 'iromani', comentario:'Increible'}]
},

    {id:2,
    nombreDelInstrumento: "Clarinete",
    marca: "Jupiter",
    modelo: "ZK200",
    fechaDeCreacion: "4/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/ycl255-650x650.jpg",
    descripcion: 'Instrumento musical de viento , que se compone de una boquilla de lengüeta de caña , un tubo formado por varias piezas de madera dura , con agujeros que se tapan con los dedos o se cierran con llave , y un pabellón de clarín.',
    creadoPor: 'frizzi',
    precio: 90,
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mheber', comentario:'Tremendo'}, {usuarioQueComento: 'frizzi', comentario:'Malo'}, {usuarioQueComento: 'mheber', comentario:'Increible'}, {usuarioQueComento: 'tmasic', comentario:'Estaba Roto'}]
},

    {id:3,
    nombreDelInstrumento: "Guitarra Electrica",
    marca: "Fender",
    modelo: "Stratocaster",
    fechaDeCreacion: "5/3/2021",
    imagen: "https://famauy.xprostore.com/image/cache/data/imagenesweb/lps18odch1-650x650.jpg",
    descripcion: 'La guitarra eléctrica es un tipo de guitarra, que a diferencia de la guitarra española y la guitarra acústica, su caja no hace resonancia, ya que esta es por inducción eléctrica a través de un Amplificador de guitarra o también a través de un Pedal de efectos.',
    creadoPor: 'mheber',
    precio: 160,
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'iromani', comentario:'Tremendo'}, {usuarioQueComento: 'mlang', comentario:'Malo'}]
},

    {id:4,
    nombreDelInstrumento: "Bajo",
    marca: "Fender",
    modelo: "KK12",
    fechaDeCreacion: "6/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/gb34jj-3ts-650x650.jpg", 
    descripcion: 'El bajo eléctrico es un instrumento musical de la familia de los cordófonos, similar en apariencia y construcción a la guitarra eléctrica, pero con un cuerpo de mayores dimensiones, un mástil de mayor longitud y escala y, normalmente, cuatro cuerdas afinadas según la afinación estándar del contrabajo.',
    creadoPor: 'mheber',
    precio: 150,
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Tremendo'}, {usuarioQueComento: 'frizzi', comentario:'Malo'}, {usuarioQueComento: 'tmasic', comentario:'Increible'}, {usuarioQueComento: 'iromani', comentario:'Estaba Roto'}]
},

    {id:5,
    nombreDelInstrumento: "Bateria",
    marca: "Mapex",
    modelo: "GW150",
    fechaDeCreacion: "7/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/rli52kh4sw-650x650.jpg",
    descripcion: 'La batería es un instrumento multicultural: la caja y el bombo son europeos, los platillos vienen del este y los toms son de origen africano y amerindio.',
    creadoPor: 'frizzi',
    precio: 200,
    comentarios: [ {usuarioQueComento: 'mheber', comentario:'Bueno'}]
},

    {id:6,
    nombreDelInstrumento: "Violin",
    marca: "Stentor",
    modelo: "AF-70",
    fechaDeCreacion: "8/3/2021",
    imagen: "https://www.yulmar.com.ar/fotos/articulos/1661333415-Violin-Estudio-Stradella-1-2-Estuche-Resina-Arco.jpg", 
    descripcion: 'Instrumento musical de cuerda , el más pequeño y agudo entre los de su clase , que se compone de una caja de resonancia en forma de 8, un mástil sin trastes y cuatro cuerdas que se hacen sonar con un arco.',
    creadoPor: 'tmasic',
    precio: 60,
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Tremendo'}, {usuarioQueComento: 'tmasic', comentario:'Malo'}, {usuarioQueComento: 'iromani', comentario:'Increible'}, {usuarioQueComento: 'frizzi', comentario:'Estaba Roto'}]
},

    {id:7,
    nombreDelInstrumento: "Guitarra Acústica",
    marca: "Seagull",
    modelo: "S6",
    fechaDeCreacion: "9/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/earth100-ns-650x650.jpg", 
    descripcion: 'La guitarra acústica se caracteriza básicamente por ser un instrumento de caja hueca encordada con cuerdas metálicas que consiguen unos sonidos metálicos, muy ricos en armónicos y muy utilizados sobre todo en música americana.',
    creadoPor: 'mlang',
    precio: 130,
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Tremendo'}]
},

    {id:8,
    nombreDelInstrumento: "Flauta Dulce",
    marca: "Yamaha",
    modelo: "YRS-32B",
    fechaDeCreacion: "10/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/yrs20g-b-650x650.jpg", 
    descripcion: 'Es un instrumento de viento muy antiguo. Popular desde la Edad Media hasta finales del Barroco, fue quedando relegado su uso al desarrollarse la orquesta clásica, poblada de instrumentos más sonoros.',
    creadoPor: 'mlang',
    precio: 40,
    comentarios: [{usuarioQueComento: 'mlang', comentario:'Bueno'}, {usuarioQueComento: 'tmasic', comentario:'Tremendo'}, {usuarioQueComento: 'mheber', comentario:'Malo'}, {usuarioQueComento: 'iromani', comentario:'Tremendo'}, {usuarioQueComento: 'frizzi', comentario:'Estab Roto'}]
},

    {id:9,
    nombreDelInstrumento: "Flauta Traversa",
    marca: "Pearl",
    modelo: "505e1r",
    fechaDeCreacion: "11/3/2021",
    imagen: "https://www.yulmar.com.ar/fotos/articulos/1793420292-Flauta-Traversa-Wisemann-Dfl-310-Plateada-16-Llaves-Estuche.jpg", 
    descripcion: 'La flauta travesera es un tipo de flauta que se encuentra fabricada en diversos materiales como el metal, hueso, madera, plástico, alpaca o combinaciones de estos.',
    creadoPor: 'iromani',
    precio: 95,
    comentarios: [ {usuarioQueComento: 'mlang', comentario:'Tremendo'}]
},

    {id:10,
    nombreDelInstrumento: "Fagot",
    marca: "Hercules",
    modelo: "Ds561b",
    fechaDeCreacion: "12/3/2021",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPX4XWY8VTR5OXlxCiGbHrkMakqMcWKZ4m5C5P1KP7xg61_R3rVE5m55QMV8I0n75uWhk&usqp=CAU", 
    descripcion: 'El fagot es un instrumento de viento madera provisto de lengüeta doble. Está formado por un tubo ligeramente cónico doblado sobre sí mismo.',
    creadoPor: 'iromani',
    precio: 115,
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Tremendo'}, {usuarioQueComento: 'tmasic', comentario:'Malo'}, {usuarioQueComento: 'iromani', comentario:'Buenisimo'}, {usuarioQueComento: 'frizzi', comentario:'Estaba Roto'}]
},

    {id:11,
    nombreDelInstrumento: "Tambor",
    marca: "Tambora",
    modelo: "Q11",
    fechaDeCreacion: "13/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/taj-12-t2-650x650.jpg", 
    descripcion: 'Un tambor es un instrumento de percusión de sonido indeterminado, perteneciente a la familia de los membranófonos según el sistema de clasificación de Hornbostel-Sachs.',
    creadoPor: 'tmasic',
    precio: 55,
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'frizzi', comentario:'Estaba Roto'}]
},

    {id:12,
    nombreDelInstrumento: "Maracas",
    marca: "Onix",
    modelo: "S6",
    fechaDeCreacion: "14/3/2021",
    imagen: "https://cl.xprostore.com/image/cache/data/imagenesweb/tmp-b-650x650.jpg", 
    descripcion: 'Las maracas son un instrumento idiófono y de oscilación constituido por una parte esférica hueca sostenida por un mango que la atraviesa, o está adherida a ella.',
    creadoPor: 'mlang',
    precio: 15,
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Tremendo'}, {usuarioQueComento: 'iromani', comentario:'Malo'}, {usuarioQueComento: 'frizzi', comentario:'Increible'}, {usuarioQueComento: 'tmasic', comentario:'Estaba Roto'}] },

    {id:13,
    nombreDelInstrumento: "Triangulo",
    marca: "Castelli",
    modelo: "Z10",
    fechaDeCreacion: "15/3/2021",
    imagen: "https://famauy.xprostore.com/image/cache/data/imagenesweb/cr-p006-00-650x650h.jpg", 
    descripcion: 'El triángulo es un instrumento de percusión de metal, perteneciente al grupo de los idiofonos, porque el sonido resultante es fruto de la vibración del metal tras ser golpeado con la baqueta de acero doblada en forma de triángulo.',
    creadoPor: 'mheber',
    precio: 10,
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Malo'},{usuarioQueComento: 'tmasic', comentario:'Increible'}, {usuarioQueComento: 'frizzi', comentario:'Estaba Roto'}] },

    {id:14,
    nombreDelInstrumento: "Arpa",
    marca: "Walter",
    modelo: "J900",
    fechaDeCreacion: "16/3/2021",
    imagen: "https://www.cdbp.patrimoniocultural.gob.cl/652/articles-79173_imagen_06.jpg", 
    descripcion: 'El arpa​ es un instrumento de cuerda pulsada formado por un marco resonante y una serie variable de cuerdas tensadas entre la sección inferior y la superior.',
    creadoPor: 'iromani',
    precio: 250,
    comentarios: [{usuarioQueComento: 'mheber', comentario:'Bueno'}, {usuarioQueComento: 'mlang', comentario:'Tremendo'}, {usuarioQueComento: 'tmasic', comentario:'Malo'}, {usuarioQueComento: 'frizzi', comentario:'Increible'}, {usuarioQueComento: 'iromani', comentario:'Estaba roto'}] },

    {id:15,
    nombreDelInstrumento: "Ukelele",
    marca: "Cordoba",
    modelo: "Tenor",
    fechaDeCreacion: "17/3/2021",
    imagen: "https://ar.xprostore.com/image/cache/data/imagenesweb/ma-s-650x650.jpg", 
    descripcion: 'El Ukelele​ (del hawaiano ukulele, literalmente, Pulga saltadora) es un instrumento de cuerda pulsada, utilizado como instrumento principal en la música de las islas Hawái, Tahití y la isla de Pascua que originalmente tenía cinco cuerdas.',
    creadoPor: 'tmasic',
    precio: 105,
    comentarios: [{usuarioQueComento: 'frizzi', comentario:'Bueno'}, {usuarioQueComento: 'iromani', comentario:'Tremendo'}] },
    ],
    usuarios: [
    {
        id: 0,
        username: 'frizzi',
        fechaDeNacimiento: new Date('12-12-2001'),
        clave: 'abc1',
        cantidadDeProductos: 3,
        seguidores: 25,
        comentarios: 11,
        idsDeLosProductosCreados: [0, 2, 5],
        fotoDePerfil: 'https://i.ibb.co/y0PkCDW/foto-fran.jpg'
    },
    {
        id: 1,
        username: 'mlang',
        fechaDeNacimiento: new Date('11-10-2001'),
        clave: 'abbc2',
        cantidadDeProductos: 4,
        seguidores: 921,
        comentarios: 16,
        idsDeLosProductosCreados: [1, 7, 8, 12],
        fotoDePerfil: 'https://i.ibb.co/Tq9WPQ1/8-B93527-F-638-F-4-CED-823-C-3-B85-A27-BFD48.jpg'
    },
    {
        id: 2,
        username: 'tmasic',
        fechaDeNacimiento: new Date('10-12-2001'),
        clave: 'abccc1',
        cantidadDeProductos: 3,
        seguidores: 140,
        comentarios: 9,
        idsDeLosProductosCreados: [6, 11, 15],
        fotoDePerfil: 'https://i.ibb.co/Gnx8cjt/foto-timo.jpg'
    },
    {
        id: 3,
        username: 'mheber',
        fechaDeNacimiento: new Date('02-12-1995'),
        clave: 'abcde11',
        cantidadDeProductos: 3,
        seguidores: 110,
        comentarios: 12,
        idsDeLosProductosCreados: [3, 4, 13],
        fotoDePerfil: 'https://media-exp1.licdn.com/dms/image/C5603AQGBiazQ36HrmQ/profile-displayphoto-shrink_200_200/0/1564075095565?e=1622678400&v=beta&t=zfFgeZI4Fljf6OSTnkamWPVW0guJV8uwka5MAwnIvgs'
    },
    {
        id: 4,
        username: 'iromani',
        fechaDeNacimiento: new Date('12-03-1990'),
        clave: 'abcd10',
        cantidadDeProductos: 3,
        seguidores: 100,
        comentarios: 11,
        idsDeLosProductosCreados: [ 9, 10, 14],
        fotoDePerfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2oE02pX4mrruguaB5nyv-l0uIpvT9re_bQmTHjlrYhw68_gMBzuiaT3dEdpuh9bxTE60&usqp=CAU'
    },
    {
        id: 5,
        username: 'Usuario1',
        fechaDeNacimiento: new Date('02-03-1990'),
        clave: 'abcd12',
        cantidadDeProductos: 8,
        seguidores: 100,
        comentarios: 30,
        idsDeLosProductosCreados: [0, 1, 2, 3, 4 ,5, 6, 7],
        fotoDePerfil: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png'
    },
]
}

module.exports = instrumentos