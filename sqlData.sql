-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 06-05-2021 a las 02:31:32
-- Versión del servidor: 5.7.32
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de datos: `Melodiic`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id_producto_comentado` int(10) UNSIGNED NOT NULL,
  `id_autor` int(10) UNSIGNED NOT NULL,
  `comentario` varchar(255) NOT NULL,
  `fecha_de_creacion` date NOT NULL,
  `foto_autor` varchar(1000) DEFAULT NULL,
  `id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id_producto_comentado`, `id_autor`, `comentario`, `fecha_de_creacion`, `foto_autor`, `id`) VALUES
(0, 3, 'Bueno', '2021-05-01', 'https://media-exp1.licdn.com/dms/image/C5603AQGBiazQ36HrmQ/profile-displayphoto-shrink_200_200/0/1564075095565?e=1622678400&v=beta&t=zfFgeZI4Fljf6OSTnkamWPVW0guJV8uwka5MAwnIvgs', 1),
(0, 1, 'Tremendo', '2021-05-11', 'https://i.ibb.co/Tq9WPQ1/8-B93527-F-638-F-4-CED-823-C-3-B85-A27-BFD48.jpg', 2),
(1, 1, 'Tremendo', '2021-05-31', 'https://i.ibb.co/Tq9WPQ1/8-B93527-F-638-F-4-CED-823-C-3-B85-A27-BFD48.jpg', 3),
(2, 0, 'Malo', '2021-05-12', 'https://i.ibb.co/y0PkCDW/foto-fran.jpg', 4),
(3, 3, 'Bueno', '2021-05-31', 'https://media-exp1.licdn.com/dms/image/C5603AQGBiazQ36HrmQ/profile-displayphoto-shrink_200_200/0/1564075095565?e=1622678400&v=beta&t=zfFgeZI4Fljf6OSTnkamWPVW0guJV8uwka5MAwnIvgs', 5),
(4, 2, 'Increible', '2021-05-14', 'https://i.ibb.co/Gnx8cjt/foto-timo.jpg', 6),
(5, 3, 'Bueno', '2021-05-15', 'https://media-exp1.licdn.com/dms/image/C5603AQGBiazQ36HrmQ/profile-displayphoto-shrink_200_200/0/1564075095565?e=1622678400&v=beta&t=zfFgeZI4Fljf6OSTnkamWPVW0guJV8uwka5MAwnIvgs', 7),
(6, 2, 'Malo', '2021-05-01', 'https://i.ibb.co/Gnx8cjt/foto-timo.jpg', 8),
(7, 1, 'Tremendo', '2021-05-20', 'https://i.ibb.co/Tq9WPQ1/8-B93527-F-638-F-4-CED-823-C-3-B85-A27-BFD48.jpg', 9),
(8, 1, 'Bueno', '2021-05-01', 'https://i.ibb.co/Tq9WPQ1/8-B93527-F-638-F-4-CED-823-C-3-B85-A27-BFD48.jpg', 10),
(9, 1, 'Tremendo', '2021-05-11', 'https://i.ibb.co/Tq9WPQ1/8-B93527-F-638-F-4-CED-823-C-3-B85-A27-BFD48.jpg', 11),
(10, 0, 'Estaba roto', '2021-05-06', 'https://i.ibb.co/y0PkCDW/foto-fran.jpg', 12),
(11, 3, 'Bueno', '2021-05-01', 'https://media-exp1.licdn.com/dms/image/C5603AQGBiazQ36HrmQ/profile-displayphoto-shrink_200_200/0/1564075095565?e=1622678400&v=beta&t=zfFgeZI4Fljf6OSTnkamWPVW0guJV8uwka5MAwnIvgs', 13),
(12, 4, 'Malo', '2021-03-01', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2oE02pX4mrruguaB5nyv-l0uIpvT9re_bQmTHjlrYhw68_gMBzuiaT3dEdpuh9bxTE60&usqp=CAU', 14),
(13, 2, 'Increible', '2021-02-01', 'https://i.ibb.co/Gnx8cjt/foto-timo.jpg', 15),
(14, 3, 'Bueno', '2021-05-01', 'https://media-exp1.licdn.com/dms/image/C5603AQGBiazQ36HrmQ/profile-displayphoto-shrink_200_200/0/1564075095565?e=1622678400&v=beta&t=zfFgeZI4Fljf6OSTnkamWPVW0guJV8uwka5MAwnIvgs', 16),
(15, 4, 'Tremendo', '2021-05-22', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2oE02pX4mrruguaB5nyv-l0uIpvT9re_bQmTHjlrYhw68_gMBzuiaT3dEdpuh9bxTE60&usqp=CAU', 17);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_creados`
--

CREATE TABLE `productos_creados` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `producto_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos_creados`
--

INSERT INTO `productos_creados` (`id`, `usuario_id`, `producto_id`) VALUES
(1, 1, 1),
(2, 0, 2),
(3, 3, 3),
(4, 3, 4),
(5, 0, 5),
(6, 2, 6),
(7, 1, 7),
(8, 1, 8),
(9, 4, 9),
(10, 4, 10),
(11, 2, 11),
(12, 1, 12),
(13, 3, 13),
(14, 4, 14),
(15, 2, 15),
(17, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre_producto` varchar(50) NOT NULL,
  `fecha_de_creacion` date NOT NULL,
  `marca` varchar(50) DEFAULT NULL,
  `modelo` varchar(20) NOT NULL,
  `precio` int(10) UNSIGNED NOT NULL,
  `descripcion` mediumtext,
  `creado_por` int(10) UNSIGNED NOT NULL,
  `foto_product` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `nombre_producto`, `fecha_de_creacion`, `marca`, `modelo`, `precio`, `descripcion`, `creado_por`, `foto_product`) VALUES
(0, 'Trompeta', '2021-03-02', 'Yamaha', 'K-40', 100, 'Instrumento musical de viento , consistente en un tubo largo de metal que va ensanchándose desde la boquilla al pabellón y produce diversidad de sonidos según la fuerza con que la boca impele el aire.', 0, 'https://ar.xprostore.com/image/cache/data/imagenesweb/ytr2330-650x650.jpg'),
(1, 'Trombon', '2021-03-03', 'Yamaha', 'WD45', 120, 'Instrumento musical de metal , especie de trompeta grande , y cuyos sonidos responden , según su clase , a las voces de tenor , contralto o bajo respectivamente.', 1, 'https://ar.xprostore.com/image/cache/data/imagenesweb/ysl154-650x650.jpg'),
(2, 'Clarinete', '2021-03-04', 'Jupiter', 'ZK200', 90, 'Instrumento musical de viento , que se compone de una boquilla de lengüeta de caña , un tubo formado por varias piezas de madera dura , con agujeros que se tapan con los dedos o se cierran con llave , y un pabellón de clarín.', 0, 'https://ar.xprostore.com/image/cache/data/imagenesweb/ycl255-650x650.jpg'),
(3, 'Guitarra Electrica', '2021-03-05', 'Fender', 'Stratocaster', 160, 'La guitarra eléctrica es un tipo de guitarra, que a diferencia de la guitarra española y la guitarra acústica, su caja no hace resonancia, ya que esta es por inducción eléctrica a través de un Amplificador de guitarra o también a través de un Pedal de efectos.', 3, 'https://famauy.xprostore.com/image/cache/data/imagenesweb/lps18odch1-650x650.jpg'),
(4, 'Bajo', '2021-03-06', 'Fender', 'KK12', 150, 'El bajo eléctrico es un instrumento musical de la familia de los cordófonos, similar en apariencia y construcción a la guitarra eléctrica, pero con un cuerpo de mayores dimensiones, un mástil de mayor longitud y escala y, normalmente, cuatro cuerdas afinadas según la afinación estándar del contrabajo.', 3, 'https://ar.xprostore.com/image/cache/data/imagenesweb/gb34jj-3ts-650x650.jpg'),
(5, 'Bateria ', '2021-03-07', 'Mapex', 'GW150', 200, 'La batería es un instrumento multicultural: la caja y el bombo son europeos, los platillos vienen del este y los toms son de origen africano y amerindio.', 0, 'https://ar.xprostore.com/image/cache/data/imagenesweb/rli52kh4sw-650x650.jpg'),
(6, 'Violin', '2021-03-08', 'Stentor', 'AF-70', 60, 'Instrumento musical de cuerda , el más pequeño y agudo entre los de su clase , que se compone de una caja de resonancia en forma de 8, un mástil sin trastes y cuatro cuerdas que se hacen sonar con un arco.', 2, 'https://www.yulmar.com.ar/fotos/articulos/1661333415-Violin-Estudio-Stradella-1-2-Estuche-Resina-Arco.jpg'),
(7, 'Guitarra Acústica', '2021-03-09', 'Seagull', 'S6', 130, 'La guitarra acústica se caracteriza básicamente por ser un instrumento de caja hueca encordada con cuerdas metálicas que consiguen unos sonidos metálicos, muy ricos en armónicos y muy utilizados sobre todo en música americana.', 1, 'https://ar.xprostore.com/image/cache/data/imagenesweb/earth100-ns-650x650.jpg'),
(8, 'Flauta Dulce', '2021-03-10', 'Yamaha', 'YRS-32B', 40, 'Es un instrumento de viento muy antiguo. Popular desde la Edad Media hasta finales del Barroco, fue quedando relegado su uso al desarrollarse la orquesta clásica, poblada de instrumentos más sonoros.', 1, 'https://ar.xprostore.com/image/cache/data/imagenesweb/yrs20g-b-650x650.jpg'),
(9, 'Flauta Traversa', '2021-03-11', 'Pearl', '505e1r', 95, 'La flauta travesera es un tipo de flauta que se encuentra fabricada en diversos materiales como el metal, hueso, madera, plástico, alpaca o combinaciones de estos.', 4, 'https://www.yulmar.com.ar/fotos/articulos/1793420292-Flauta-Traversa-Wisemann-Dfl-310-Plateada-16-Llaves-Estuche.jpg'),
(10, 'Fagot', '2021-03-12', 'Hercules', 'DS561B', 115, 'El fagot es un instrumento de viento madera provisto de lengüeta doble. Está formado por un tubo ligeramente cónico doblado sobre sí mismo.', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPX4XWY8VTR5OXlxCiGbHrkMakqMcWKZ4m5C5P1KP7xg61_R3rVE5m55QMV8I0n75uWhk&usqp=CAU'),
(11, 'Tambor', '2021-03-13', 'Tambora', 'Q11', 55, 'Un tambor es un instrumento de percusión de sonido indeterminado, perteneciente a la familia de los membranófonos según el sistema de clasificación de Hornbostel-Sachs.', 2, 'https://ar.xprostore.com/image/cache/data/imagenesweb/taj-12-t2-650x650.jpg'),
(12, 'Maracas', '2021-03-14', 'Onix', 'S6', 15, 'Las maracas son un instrumento idiófono y de oscilación constituido por una parte esférica hueca sostenida por un mango que la atraviesa, o está adherida a ella.', 1, 'https://cl.xprostore.com/image/cache/data/imagenesweb/tmp-b-650x650.jpg'),
(13, 'Triangulo', '2021-03-15', 'Castelli', 'Z10', 10, 'El triángulo es un instrumento de percusión de metal, perteneciente al grupo de los idiofonos, porque el sonido resultante es fruto de la vibración del metal tras ser golpeado con la baqueta de acero doblada en forma de triángulo.', 3, 'https://famauy.xprostore.com/image/cache/data/imagenesweb/cr-p006-00-650x650h.jpg'),
(14, 'Arpa', '2021-03-16', 'Walter', 'J900', 250, 'El arpa​ es un instrumento de cuerda pulsada formado por un marco resonante y una serie variable de cuerdas tensadas entre la sección inferior y la superior.', 4, 'https://www.cdbp.patrimoniocultural.gob.cl/652/articles-79173_imagen_06.jpg'),
(15, 'Ukelele', '2021-03-17', 'Cordoba', 'Tenor', 105, 'El Ukelele​ (del hawaiano ukulele, literalmente, Pulga saltadora) es un instrumento de cuerda pulsada, utilizado como instrumento principal en la música de las islas Hawái, Tahití y la isla de Pascua que originalmente tenía cinco cuerdas.', 2, 'https://ar.xprostore.com/image/cache/data/imagenesweb/ma-s-650x650.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(20) NOT NULL,
  `fecha_de_nacimiento` date NOT NULL,
  `clave` varchar(25) NOT NULL,
  `cantidad_de_productos` int(10) UNSIGNED NOT NULL,
  `seguidores` int(10) UNSIGNED NOT NULL,
  `comentarios` int(10) UNSIGNED NOT NULL,
  `foto_perfil` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `fecha_de_nacimiento`, `clave`, `cantidad_de_productos`, `seguidores`, `comentarios`, `foto_perfil`) VALUES
(0, 'frizzi', '2001-12-12', 'abc1', 3, 25, 11, 'https://i.ibb.co/y0PkCDW/foto-fran.jpg'),
(1, 'mlang', '2001-10-11', 'abbc2', 4, 921, 16, 'https://i.ibb.co/Tq9WPQ1/8-B93527-F-638-F-4-CED-823-C-3-B85-A27-BFD48.jpg'),
(2, 'tmasic', '2001-12-10', 'abccc1', 3, 140, 9, 'https://i.ibb.co/Gnx8cjt/foto-timo.jpg'),
(3, 'mheber', '1995-12-02', 'abcde11', 3, 110, 12, 'https://media-exp1.licdn.com/dms/image/C5603AQGBiazQ36HrmQ/profile-displayphoto-shrink_200_200/0/1564075095565?e=1622678400&v=beta&t=zfFgeZI4Fljf6OSTnkamWPVW0guJV8uwka5MAwnIvgs'),
(4, 'iromani', '1990-03-12', 'abcd10', 3, 100, 11, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2oE02pX4mrruguaB5nyv-l0uIpvT9re_bQmTHjlrYhw68_gMBzuiaT3dEdpuh9bxTE60&usqp=CAU');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_producto_comentado` (`id_producto_comentado`),
  ADD KEY `id_autor` (`id_autor`);

--
-- Indices de la tabla `productos_creados`
--
ALTER TABLE `productos_creados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productos_creados_ibfk_1` (`usuario_id`),
  ADD KEY `productos_creados_ibfk_2` (`producto_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `creado_por` (`creado_por`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `productos_creados`
--
ALTER TABLE `productos_creados`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_producto_comentado`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_autor`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `productos_creados`
--
ALTER TABLE `productos_creados`
  ADD CONSTRAINT `productos_creados_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `productos_creados_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`creado_por`) REFERENCES `usuarios` (`id`);
