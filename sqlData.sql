-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 26-05-2021 a las 04:20:32
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
(21, 51, 'malardddddo', '2021-05-26', 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png', 55),
(43, 51, 'ashei', '2021-05-26', 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png', 56),
(41, 51, 'muy buena', '2021-05-26', 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png', 57),
(24, 51, '.', '2021-05-26', 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png', 58),
(24, 51, '.', '2021-05-26', 'https://locuraviajes.com//wp-content/uploads/2014/03/la-tierra-y-su-representaci%C3%B3n-600x600.jpg', 59);

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
(16, 43, 41),
(17, 44, 1),
(18, 45, 2),
(19, 51, 3),
(20, 43, 4),
(21, 46, 5),
(22, 45, 6),
(23, 47, 7),
(24, 44, 8),
(25, 47, 9),
(26, 44, 10),
(27, 51, 11),
(28, 50, 12),
(29, 49, 13),
(30, 48, 14),
(31, 47, 15),
(32, 46, 16),
(33, 45, 21),
(34, 44, 24),
(35, 43, 27),
(36, 51, 43);

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
(1, 'Trombon', '2021-03-03', 'Yamaha', 'WD45', 120, 'Instrumento musical de metal , especie de trompeta grande , y cuyos sonidos responden , según su clase , a las voces de tenor , contralto o bajo respectivamente.', 44, 'https://ar.xprostore.com/image/cache/data/imagenesweb/ysl154-650x650.jpg'),
(2, 'Clarinete', '2021-03-04', 'Jupiter', 'ZK200', 90, 'Instrumento musical de viento , que se compone de una boquilla de lengüeta de caña , un tubo formado por varias piezas de madera dura , con agujeros que se tapan con los dedos o se cierran con llave , y un pabellón de clarín.', 45, 'https://ar.xprostore.com/image/cache/data/imagenesweb/ycl255-650x650.jpg'),
(3, 'Guitarra Electrica', '2021-03-05', 'Fender', 'Stratocaster', 160, 'La guitarra eléctrica es un tipo de guitarra, que a diferencia de la guitarra española y la guitarra acústica, su caja no hace resonancia, ya que esta es por inducción eléctrica a través de un Amplificador de guitarra o también a través de un Pedal de efectos.', 51, 'https://famauy.xprostore.com/image/cache/data/imagenesweb/lps18odch1-650x650.jpg'),
(4, 'Bajo', '2021-03-06', 'Fender', 'KK12', 150, 'El bajo eléctrico es un instrumento musical de la familia de los cordófonos, similar en apariencia y construcción a la guitarra eléctrica, pero con un cuerpo de mayores dimensiones, un mástil de mayor longitud y escala y, normalmente, cuatro cuerdas afinadas según la afinación estándar del contrabajo.', 43, 'https://ar.xprostore.com/image/cache/data/imagenesweb/gb34jj-3ts-650x650.jpg'),
(5, 'Bateria ', '2021-03-07', 'Mapex', 'GW150', 200, 'La batería es un instrumento multicultural: la caja y el bombo son europeos, los platillos vienen del este y los toms son de origen africano y amerindio.', 46, 'https://ar.xprostore.com/image/cache/data/imagenesweb/rli52kh4sw-650x650.jpg'),
(6, 'Violin', '2021-03-08', 'Stentor', 'AF-70', 60, 'Instrumento musical de cuerda , el más pequeño y agudo entre los de su clase , que se compone de una caja de resonancia en forma de 8, un mástil sin trastes y cuatro cuerdas que se hacen sonar con un arco.', 45, 'https://www.yulmar.com.ar/fotos/articulos/1661333415-Violin-Estudio-Stradella-1-2-Estuche-Resina-Arco.jpg'),
(7, 'Guitarra Acústica', '2021-03-09', 'Seagull', 'S6', 130, 'La guitarra acústica se caracteriza básicamente por ser un instrumento de caja hueca encordada con cuerdas metálicas que consiguen unos sonidos metálicos, muy ricos en armónicos y muy utilizados sobre todo en música americana.', 47, 'https://ar.xprostore.com/image/cache/data/imagenesweb/earth100-ns-650x650.jpg'),
(8, 'Flauta Dulce', '2021-03-10', 'Yamaha', 'YRS-32B', 40, 'Es un instrumento de viento muy antiguo. Popular desde la Edad Media hasta finales del Barroco, fue quedando relegado su uso al desarrollarse la orquesta clásica, poblada de instrumentos más sonoros.', 44, 'https://ar.xprostore.com/image/cache/data/imagenesweb/yrs20g-b-650x650.jpg'),
(9, 'Flauta Traversa', '2021-03-11', 'Pearl', '505e1r', 95, 'La flauta travesera es un tipo de flauta que se encuentra fabricada en diversos materiales como el metal, hueso, madera, plástico, alpaca o combinaciones de estos.', 47, 'https://www.yulmar.com.ar/fotos/articulos/1793420292-Flauta-Traversa-Wisemann-Dfl-310-Plateada-16-Llaves-Estuche.jpg'),
(10, 'Fagot', '2021-03-12', 'Hercules', 'DS561B', 115, 'El fagot es un instrumento de viento madera provisto de lengüeta doble. Está formado por un tubo ligeramente cónico doblado sobre sí mismo.', 44, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPX4XWY8VTR5OXlxCiGbHrkMakqMcWKZ4m5C5P1KP7xg61_R3rVE5m55QMV8I0n75uWhk&usqp=CAU'),
(11, 'Tambor', '2021-03-13', 'Tambora', 'Q11', 55, 'Un tambor es un instrumento de percusión de sonido indeterminado, perteneciente a la familia de los membranófonos según el sistema de clasificación de Hornbostel-Sachs.', 51, 'https://ar.xprostore.com/image/cache/data/imagenesweb/taj-12-t2-650x650.jpg'),
(12, 'Maracas', '2021-03-14', 'Onix', 'S6', 15, 'Las maracas son un instrumento idiófono y de oscilación constituido por una parte esférica hueca sostenida por un mango que la atraviesa, o está adherida a ella.', 50, 'https://cl.xprostore.com/image/cache/data/imagenesweb/tmp-b-650x650.jpg'),
(13, 'Triangulo', '2021-03-15', 'Castelli', 'Z10', 10, 'El triángulo es un instrumento de percusión de metal, perteneciente al grupo de los idiofonos, porque el sonido resultante es fruto de la vibración del metal tras ser golpeado con la baqueta de acero doblada en forma de triángulo.', 49, 'https://famauy.xprostore.com/image/cache/data/imagenesweb/cr-p006-00-650x650h.jpg'),
(14, 'Arpa', '2021-03-16', 'Walter', 'J900', 250, 'El arpa​ es un instrumento de cuerda pulsada formado por un marco resonante y una serie variable de cuerdas tensadas entre la sección inferior y la superior.', 48, 'https://www.cdbp.patrimoniocultural.gob.cl/652/articles-79173_imagen_06.jpg'),
(15, 'Ukelele', '2021-03-17', 'Cordoba', 'Tenor', 105, 'El Ukelele​ (del hawaiano ukulele, literalmente, Pulga saltadora) es un instrumento de cuerda pulsada, utilizado como instrumento principal en la música de las islas Hawái, Tahití y la isla de Pascua que originalmente tenía cinco cuerdas.', 47, 'https://ar.xprostore.com/image/cache/data/imagenesweb/ma-s-650x650.jpg'),
(16, 'Trompeta', '2021-03-02', 'Yamaha', 'K-40', 100, 'Instrumento musical de viento , consistente en un tubo largo de metal que va ensanchándose desde la boquilla al pabellón y produce diversidad de sonidos según la fuerza con que la boca impele el aire.', 46, 'https://ar.xprostore.com/image/cache/data/imagenesweb/ytr2330-650x650.jpg'),
(21, 'Bateriaa', '2021-05-06', 'A', 'A', 200, 'Alta bateriaaaa', 45, 'https://images-na.ssl-images-amazon.com/images/I/61f3aFVQSLL._AC_SX679_.jpg'),
(24, 'Bajo Electricoooo', '2021-05-21', 'A', 'A', 100, 'Bajo electrico', 44, 'https://http2.mlstatic.com/D_NQ_NP_852813-MLA42757222371_072020-O.webp'),
(27, 'guitarra', '2021-05-12', 'A', 'A', 10000, 'alta guitarra', 43, 'https://http2.mlstatic.com/D_NQ_NP_732298-MLA30908792835_052019-O.webp'),
(41, 'Bateria', '2021-05-26', 'X200', 'Alpha', 1000, 'Alta Bata perrito malvado', 43, 'https://images-na.ssl-images-amazon.com/images/I/61f3aFVQSLL._AC_SX679_.jpg'),
(43, 'Guitarra', '2021-05-26', 'X23', 'Acustica', 100, 'Guitarra acustica sacada para tocar en el atardecer tomando mate cantando canciones de misa con amigos de confirmacion.', 51, 'https://http2.mlstatic.com/D_NQ_NP_732298-MLA30908792835_052019-O.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(20) NOT NULL,
  `fecha_de_nacimiento` date NOT NULL,
  `clave` varchar(10000) NOT NULL,
  `cantidad_de_productos` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `seguidores` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `comentarios` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `foto_perfil` varchar(1000) NOT NULL DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `fecha_de_nacimiento`, `clave`, `cantidad_de_productos`, `seguidores`, `comentarios`, `foto_perfil`) VALUES
(43, 'LanguilaElectrica001', '2021-05-05', '$2a$10$0Ai82tdyiGdx9Bh/G5GJkuBr.QqBnvZrFgdKLH.pLzqEh4lwh0d5y', 4, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png'),
(44, 'langa2', '2021-05-01', '$2a$10$ate709pCWokLLBzGHUIp/Owq7stjVd6R2.LuGDD0cPaC6FxidyrQG', 5, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png'),
(45, 'frizzi', '2021-05-12', '$2a$10$KMsz/VBILKy5ef6OzZElVefwr2pvXti4jReAcDH2ZtCR.JHLwnT/i', 2, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png'),
(46, 'tmasic', '2021-05-06', '$2a$10$0wp6ggFeYprRk9DwgLWUiOJrXjhQVLi48XBEBCdfzF12AVxRCy7MG', 2, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png'),
(47, 'iromani', '2021-05-14', '$2a$10$Y.cF6APlSLKkydqGmmjoAOl6PmEv7yiILCjiQn0zRAGWKxVEGxrgC', 3, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png'),
(48, 'gponce', '2021-05-14', '$2a$10$5hTtWBJCG/a42YYN4/x1NuaCsbb4.qj1a35a88dHC2dCQybd9s6LC', 1, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png'),
(49, 'tuvi', '2021-05-06', '$2a$10$6Onql9tYbQ1kR7UB9EMuZ.ciNT/h01ZoGJKc19cpTXrb68aaO6qvu', 1, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png'),
(50, 'laquito', '2021-05-14', '$2a$10$sX5frc6A8mWm9YYUcgweJOGJkAMmnH4zcCgBwbCV0nG0Ew03g4.3W', 1, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png'),
(51, 'walter', '2021-05-18', '$2a$10$6qkvC/8dk7YWxeqGi7A7TeCAw.hnsSM1935wrmprAVd2rLpuEALYO', 3, 0, 0, 'https://locuraviajes.com//wp-content/uploads/2014/03/la-tierra-y-su-representaci%C3%B3n-600x600.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comentarios_ibfk_1` (`id_producto_comentado`),
  ADD KEY `comentarios_ibfk_2` (`id_autor`);

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
  ADD KEY `products_ibfk_1` (`creado_por`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT de la tabla `productos_creados`
--
ALTER TABLE `productos_creados`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

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
