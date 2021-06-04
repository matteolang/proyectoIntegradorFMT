-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 04-06-2021 a las 19:02:26
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
  `id` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id_producto_comentado`, `id_autor`, `comentario`, `fecha_de_creacion`, `foto_autor`, `id`, `createdAt`, `updatedAt`) VALUES
(21, 51, 'malardddddo', '2021-05-26', 'https://img.wattpad.com/3069ab2b53692f24ae54dbfa2241ef81e750fdcf/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d7077526c46645f5764486836413d3d2d3332332e313634363262356230323731633165333237373433343837363034392e6a7067?s=fit&w=720&h=720', 55, '2021-06-04 18:41:39', '2021-06-04 15:41:55'),
(43, 51, 'ashei', '2021-05-26', 'https://img.wattpad.com/3069ab2b53692f24ae54dbfa2241ef81e750fdcf/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d7077526c46645f5764486836413d3d2d3332332e313634363262356230323731633165333237373433343837363034392e6a7067?s=fit&w=720&h=720', 56, '2021-06-04 18:41:39', '2021-06-04 15:41:55'),
(41, 51, 'muy buena', '2021-05-26', 'https://img.wattpad.com/3069ab2b53692f24ae54dbfa2241ef81e750fdcf/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d7077526c46645f5764486836413d3d2d3332332e313634363262356230323731633165333237373433343837363034392e6a7067?s=fit&w=720&h=720', 57, '2021-06-04 18:41:39', '2021-06-04 15:41:55'),
(24, 51, '.', '2021-05-26', 'https://img.wattpad.com/3069ab2b53692f24ae54dbfa2241ef81e750fdcf/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d7077526c46645f5764486836413d3d2d3332332e313634363262356230323731633165333237373433343837363034392e6a7067?s=fit&w=720&h=720', 58, '2021-06-04 18:41:39', '2021-06-04 15:41:55'),
(24, 51, '.', '2021-05-26', 'https://img.wattpad.com/3069ab2b53692f24ae54dbfa2241ef81e750fdcf/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d7077526c46645f5764486836413d3d2d3332332e313634363262356230323731633165333237373433343837363034392e6a7067?s=fit&w=720&h=720', 59, '2021-06-04 18:41:39', '2021-06-04 15:41:55'),
(8, 45, 'la luna', '2021-05-31', 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png', 60, '2021-06-04 18:41:39', '2021-06-04 18:48:03'),
(11, 51, 'caca', '2021-05-31', 'https://img.wattpad.com/3069ab2b53692f24ae54dbfa2241ef81e750fdcf/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d7077526c46645f5764486836413d3d2d3332332e313634363262356230323731633165333237373433343837363034392e6a7067?s=fit&w=720&h=720', 75, '2021-06-04 18:41:39', '2021-06-04 15:41:55'),
(21, 45, 'dsf', '2021-05-31', 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png', 76, '2021-06-04 18:41:39', '2021-06-04 18:48:03'),
(24, 52, 'godetoo', '2021-06-04', 'https://lh3.googleusercontent.com/proxy/UnUxtKYfSCVWPLFrtRSTek9nl2vMmvOv28r_Qu0y9Gq7smAcS2Z-kmuk7FDM4dtpFppMXI88a6eEQhoFulJqWf8hY0qubbjz3qXYbg', 79, '2021-06-04 18:41:39', '2021-06-04 15:41:55'),
(43, 45, 'My name is frozistico', '2021-06-04', 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png', 81, '2021-06-04 18:41:39', '2021-06-04 18:48:03');

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
(36, 51, 43),
(37, 45, 44);

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
  `foto_product` varchar(1000) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `nombre_producto`, `fecha_de_creacion`, `marca`, `modelo`, `precio`, `descripcion`, `creado_por`, `foto_product`, `createdAt`, `updatedAt`) VALUES
(1, 'Trombon', '2021-03-03', 'Yamaha', 'WD45', 120, 'Instrumento musical de metal , especie de trompeta grande , y cuyos sonidos responden , según su clase , a las voces de tenor , contralto o bajo respectivamente.', 44, 'https://ar.xprostore.com/image/cache/data/imagenesweb/ysl154-650x650.jpg', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(2, 'Clarinete', '2021-03-04', 'Jupiter', 'ZK200', 90, 'Instrumento musical de viento , que se compone de una boquilla de lengüeta de caña , un tubo formado por varias piezas de madera dura , con agujeros que se tapan con los dedos o se cierran con llave , y un pabellón de clarín.', 45, 'https://ar.xprostore.com/image/cache/data/imagenesweb/ycl255-650x650.jpg', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(3, 'Guitarra Electrica', '2021-03-05', 'Fender', 'Stratocaster', 160, 'La guitarra eléctrica es un tipo de guitarra, que a diferencia de la guitarra española y la guitarra acústica, su caja no hace resonancia, ya que esta es por inducción eléctrica a través de un Amplificador de guitarra o también a través de un Pedal de efectos.', 51, 'https://famauy.xprostore.com/image/cache/data/imagenesweb/lps18odch1-650x650.jpg', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(4, 'Bajo', '2021-03-06', 'Fender', 'KK12', 150, 'El bajo eléctrico es un instrumento musical de la familia de los cordófonos, similar en apariencia y construcción a la guitarra eléctrica, pero con un cuerpo de mayores dimensiones, un mástil de mayor longitud y escala y, normalmente, cuatro cuerdas afinadas según la afinación estándar del contrabajo.', 43, 'https://ar.xprostore.com/image/cache/data/imagenesweb/gb34jj-3ts-650x650.jpg', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(5, 'Bateria ', '2021-03-07', 'Mapex', 'GW150', 200, 'La batería es un instrumento multicultural: la caja y el bombo son europeos, los platillos vienen del este y los toms son de origen africano y amerindio.', 46, 'https://ar.xprostore.com/image/cache/data/imagenesweb/rli52kh4sw-650x650.jpg', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(7, 'Guitarra Acústica', '2021-03-09', 'Seagull', 'S6', 130, 'La guitarra acústica se caracteriza básicamente por ser un instrumento de caja hueca encordada con cuerdas metálicas que consiguen unos sonidos metálicos, muy ricos en armónicos y muy utilizados sobre todo en música americana.', 47, 'https://ar.xprostore.com/image/cache/data/imagenesweb/earth100-ns-650x650.jpg', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(8, 'Flauta Dulce', '2021-03-10', 'Yamaha', 'YRS-32B', 40, 'Es un instrumento de viento muy antiguo. Popular desde la Edad Media hasta finales del Barroco, fue quedando relegado su uso al desarrollarse la orquesta clásica, poblada de instrumentos más sonoros.', 44, 'https://ar.xprostore.com/image/cache/data/imagenesweb/yrs20g-b-650x650.jpg', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(9, 'Flauta Traversa', '2021-03-11', 'Pearl', '505e1r', 95, 'La flauta travesera es un tipo de flauta que se encuentra fabricada en diversos materiales como el metal, hueso, madera, plástico, alpaca o combinaciones de estos.', 47, 'https://www.yulmar.com.ar/fotos/articulos/1793420292-Flauta-Traversa-Wisemann-Dfl-310-Plateada-16-Llaves-Estuche.jpg', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(10, 'Fagot', '2021-03-12', 'Hercules', 'DS561B', 115, 'El fagot es un instrumento de viento madera provisto de lengüeta doble. Está formado por un tubo ligeramente cónico doblado sobre sí mismo.', 44, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPX4XWY8VTR5OXlxCiGbHrkMakqMcWKZ4m5C5P1KP7xg61_R3rVE5m55QMV8I0n75uWhk&usqp=CAU', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(11, 'Tambor', '2021-03-13', 'Tambora', 'Q11', 55, 'Un tambor es un instrumento de percusión de sonido indeterminado, perteneciente a la familia de los membranófonos según el sistema de clasificación de Hornbostel-Sachs.', 51, 'https://ar.xprostore.com/image/cache/data/imagenesweb/taj-12-t2-650x650.jpg', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(12, 'Maracas', '2021-03-14', 'Onix', 'S6', 15, 'Las maracas son un instrumento idiófono y de oscilación constituido por una parte esférica hueca sostenida por un mango que la atraviesa, o está adherida a ella.', 50, 'https://cl.xprostore.com/image/cache/data/imagenesweb/tmp-b-650x650.jpg', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(13, 'Triangulo', '2021-03-15', 'Castelli', 'Z10', 10, 'El triángulo es un instrumento de percusión de metal, perteneciente al grupo de los idiofonos, porque el sonido resultante es fruto de la vibración del metal tras ser golpeado con la baqueta de acero doblada en forma de triángulo.', 49, 'https://famauy.xprostore.com/image/cache/data/imagenesweb/cr-p006-00-650x650h.jpg', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(14, 'Arpa', '2021-03-16', 'Walter', 'J900', 250, 'El arpa​ es un instrumento de cuerda pulsada formado por un marco resonante y una serie variable de cuerdas tensadas entre la sección inferior y la superior.', 48, 'https://www.cdbp.patrimoniocultural.gob.cl/652/articles-79173_imagen_06.jpg', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(15, 'Ukelele', '2021-03-17', 'Cordoba', 'Tenor', 105, 'El Ukelele​ (del hawaiano ukulele, literalmente, Pulga saltadora) es un instrumento de cuerda pulsada, utilizado como instrumento principal en la música de las islas Hawái, Tahití y la isla de Pascua que originalmente tenía cinco cuerdas.', 47, 'https://ar.xprostore.com/image/cache/data/imagenesweb/ma-s-650x650.jpg', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(16, 'Trompeta', '2021-03-02', 'Yamaha', 'K-40', 100, 'Instrumento musical de viento , consistente en un tubo largo de metal que va ensanchándose desde la boquilla al pabellón y produce diversidad de sonidos según la fuerza con que la boca impele el aire.', 46, 'https://ar.xprostore.com/image/cache/data/imagenesweb/ytr2330-650x650.jpg', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(21, 'Bateriaa', '2021-05-06', 'A', 'A', 200, 'Alta bateriaaaa', 45, 'https://images-na.ssl-images-amazon.com/images/I/61f3aFVQSLL._AC_SX679_.jpg', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(24, 'Bajo Electricoooo', '2021-05-21', 'A', 'A', 100, 'Bajo electrico', 44, 'https://http2.mlstatic.com/D_NQ_NP_852813-MLA42757222371_072020-O.webp', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(27, 'guitarra', '2021-05-12', 'A', 'A', 10000, 'alta guitarra', 43, 'https://http2.mlstatic.com/D_NQ_NP_732298-MLA30908792835_052019-O.webp', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(41, 'Bateria', '2021-05-26', 'X200', 'Alpha', 1000, 'Alta Bata perrito malvado', 43, 'https://productos.mjmusic.com.ar/thumb/0000000SPK522CRD43490Spark-Red_800x800.jpg', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(43, 'Guitarra', '2021-05-26', 'X23', 'Acustica', 100, 'Guitarra acustica sacada para tocar en el atardecer tomando mate cantando canciones de misa con amigos de confirmacion.', 51, 'https://http2.mlstatic.com/D_NQ_NP_732298-MLA30908792835_052019-O.webp', '2021-06-04 18:40:59', '2021-06-04 15:41:20'),
(44, 'Matteo', '2021-06-04', 'perez', 'langostino', 10201, 'langosteria universal', 45, 'https://images-na.ssl-images-amazon.com/images/I/61f3aFVQSLL._AC_SX679_.jpg', '2021-06-04 18:50:51', '2021-06-04 18:50:51');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `fecha_de_nacimiento` date NOT NULL,
  `clave` varchar(10000) NOT NULL,
  `cantidad_de_productos` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `seguidores` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `comentarios` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `foto_perfil` varchar(1000) NOT NULL DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png',
  `email` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `fecha_de_nacimiento`, `clave`, `cantidad_de_productos`, `seguidores`, `comentarios`, `foto_perfil`, `email`, `createdAt`, `updatedAt`) VALUES
(43, 'languila electrica', '2021-05-05', '$2a$10$0Ai82tdyiGdx9Bh/G5GJkuBr.QqBnvZrFgdKLH.pLzqEh4lwh0d5y', 4, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png', 'languilaelectrica001@gmail.com', '2021-06-04 17:49:58', '2021-06-04 15:32:18'),
(44, 'langa capo ', '2021-05-01', '$2a$10$ate709pCWokLLBzGHUIp/Owq7stjVd6R2.LuGDD0cPaC6FxidyrQG', 5, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png', 'langa2@gmail.com', '2021-06-04 17:49:58', '2021-06-04 15:32:18'),
(45, 'frodo rizzi', '2021-05-12', '$2a$10$mvS3fFkHPJpSVJZEwpzDEuwl4iFF8rjzb3a56lGjjGRk8Ppv/vr..', 2, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png', 'frizzi@gmail.com', '2021-06-04 17:49:58', '2021-06-04 18:48:03'),
(46, 'timo gordo', '2021-05-06', '$2a$10$0wp6ggFeYprRk9DwgLWUiOJrXjhQVLi48XBEBCdfzF12AVxRCy7MG', 2, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png', 'tmasic@gmail.com', '2021-06-04 17:49:58', '2021-06-04 15:32:18'),
(47, 'pehuen romani', '2021-05-14', '$2a$10$Y.cF6APlSLKkydqGmmjoAOl6PmEv7yiILCjiQn0zRAGWKxVEGxrgC', 3, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png', 'iromani@gmail.com', '2021-06-04 17:49:58', '2021-06-04 15:32:18'),
(48, 'guido ponce', '2021-05-14', '$2a$10$5hTtWBJCG/a42YYN4/x1NuaCsbb4.qj1a35a88dHC2dCQybd9s6LC', 1, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png', 'gponce@gmail.com', '2021-06-04 17:49:58', '2021-06-04 15:32:18'),
(49, 'tu vi', '2021-05-06', '$2a$10$6Onql9tYbQ1kR7UB9EMuZ.ciNT/h01ZoGJKc19cpTXrb68aaO6qvu', 1, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png', 'tuvi@gmail.com', '2021-06-04 17:49:58', '2021-06-04 15:32:18'),
(50, 'laquito', '2021-05-14', '$2a$10$sX5frc6A8mWm9YYUcgweJOGJkAMmnH4zcCgBwbCV0nG0Ew03g4.3W', 1, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png', 'laquito@gmail.com', '2021-06-04 17:49:58', '2021-06-04 15:32:18'),
(51, 'walter', '2021-05-18', '$2a$10$5KizhmWbi7V.t.u7tiOCD.PBfDJUwsPir5Kiph/MqLY8.SGR/z8m.', 3, 0, 0, 'https://img.wattpad.com/3069ab2b53692f24ae54dbfa2241ef81e750fdcf/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d7077526c46645f5764486836413d3d2d3332332e313634363262356230323731633165333237373433343837363034392e6a7067?s=fit&w=720&h=720', 'walter@gmail.com', '2021-06-04 17:49:58', '2021-06-04 15:32:18'),
(52, 'damian perez rizzi ', '2021-06-09', '$2a$10$5a5kzSi87EIm0T7AksJsrezjf5tZsySdFO21dDZ2WkAn9w0LFjc5.', 0, 0, 0, 'https://lh3.googleusercontent.com/proxy/UnUxtKYfSCVWPLFrtRSTek9nl2vMmvOv28r_Qu0y9Gq7smAcS2Z-kmuk7FDM4dtpFppMXI88a6eEQhoFulJqWf8hY0qubbjz3qXYbg', 'drizzi@gmail.com', '2021-06-04 17:49:58', '2021-06-04 15:32:18'),
(53, 'Langosta Maritima', '2021-06-10', '$2a$10$oDpwPf6S2xYha3dhwrYzieREIYsHSL0C7efcltLa0sykCcgChbWWa', 0, 0, 0, 'https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png', 'langostino@gmail.com', '2021-06-04 17:52:19', '2021-06-04 15:32:18'),
(54, 'broo', '2021-06-26', '$2a$10$5iVNIPeBV3NxPjPG3Uohzu4kBq9z37//0aI75xOq9zBRVUFI.9DX2', 0, 0, 0, 'https://www.aiafood.com/sites/default/files/styles/scale_600/public/recipes/aperitivo_snack_con_salsine_e_fantasia_di_verdure.jpg?itok=iinfGzME', 'brodieretallick@gmail.com', '2021-06-04 18:39:36', '2021-06-04 18:46:11');

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
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT de la tabla `productos_creados`
--
ALTER TABLE `productos_creados`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

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
