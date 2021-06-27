-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 23-06-2021 a las 16:38:00
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
  `id` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id_producto_comentado`, `id_autor`, `comentario`, `fecha_de_creacion`, `id`, `createdAt`, `updatedAt`) VALUES
(48, 48, 'Buenardas', '2021-06-07', 82, '2021-06-07 18:23:57', '2021-06-08 12:13:45'),
(47, 45, 'MC Frozono', '2021-06-07', 84, '2021-06-07 19:15:41', '2021-06-07 19:15:41'),
(56, 45, 'TERRIBLE PERRRRRRRRRRRRRO', '2021-06-07', 85, '2021-06-07 19:20:00', '2021-06-07 19:20:00'),
(50, 45, 'muy buena', '2021-06-07', 86, '2021-06-08 12:15:54', '2021-06-08 12:15:54'),
(47, 45, 'k', '2021-06-10', 91, '2021-06-10 21:24:49', '2021-06-10 21:24:49'),
(47, 45, 'l', '2021-06-10', 92, '2021-06-10 21:28:12', '2021-06-10 21:28:12'),
(47, 45, 'k', '2021-06-10', 93, '2021-06-10 21:33:37', '2021-06-10 21:33:37'),
(49, 45, 'a', '2021-06-11', 101, '2021-06-11 14:58:47', '2021-06-11 14:58:47'),
(47, 45, 's', '2021-06-11', 105, '2021-06-11 15:03:16', '2021-06-11 15:03:16'),
(48, 45, 's', '2021-06-11', 106, '2021-06-11 15:03:21', '2021-06-11 15:03:21'),
(50, 45, 'a', '2021-06-11', 108, '2021-06-11 15:03:33', '2021-06-11 15:03:33'),
(51, 45, 'as', '2021-06-11', 109, '2021-06-11 15:03:41', '2021-06-11 15:03:41'),
(56, 45, 'asd', '2021-06-11', 110, '2021-06-11 15:04:00', '2021-06-11 15:04:00'),
(55, 45, 'asdas', '2021-06-11', 111, '2021-06-11 15:04:13', '2021-06-11 15:04:13'),
(54, 45, 'asd', '2021-06-11', 112, '2021-06-11 15:04:20', '2021-06-11 15:04:20'),
(52, 45, 'sadasdasd', '2021-06-11', 114, '2021-06-11 15:04:31', '2021-06-11 15:04:31'),
(52, 45, 'a', '2021-06-11', 115, '2021-06-11 15:04:33', '2021-06-11 15:04:33'),
(52, 45, 'a', '2021-06-11', 116, '2021-06-11 15:04:35', '2021-06-11 15:04:35'),
(52, 51, 'asd', '2021-06-11', 117, '2021-06-11 15:04:58', '2021-06-11 15:04:58'),
(52, 51, 'asd', '2021-06-11', 118, '2021-06-11 15:05:00', '2021-06-11 15:05:00'),
(52, 51, 's', '2021-06-11', 119, '2021-06-11 15:05:02', '2021-06-11 15:05:02'),
(52, 51, 's', '2021-06-11', 120, '2021-06-11 15:05:04', '2021-06-11 15:05:04'),
(52, 51, 's', '2021-06-11', 121, '2021-06-11 15:05:06', '2021-06-11 15:05:06'),
(52, 51, 's', '2021-06-11', 122, '2021-06-11 15:05:08', '2021-06-11 15:05:08'),
(52, 51, 's', '2021-06-11', 123, '2021-06-11 15:05:11', '2021-06-11 15:05:11'),
(47, 51, 'basta de comentar gede', '2021-06-11', 124, '2021-06-11 15:05:47', '2021-06-11 15:05:47'),
(47, 51, 'ads', '2021-06-11', 125, '2021-06-11 15:05:52', '2021-06-11 15:05:52'),
(48, 45, '', '2021-06-11', 126, '2021-06-11 15:17:55', '2021-06-11 15:17:55'),
(48, 45, 'a', '2021-06-11', 127, '2021-06-11 15:17:57', '2021-06-11 15:17:57'),
(48, 45, 'a', '2021-06-11', 128, '2021-06-11 15:17:58', '2021-06-11 15:17:58'),
(52, 45, 'walter anashaei', '2021-06-11', 137, '2021-06-11 18:20:26', '2021-06-11 18:20:26'),
(49, 45, 'flama', '2021-06-11', 143, '2021-06-12 13:23:58', '2021-06-12 13:23:58'),
(49, 45, 'sa', '2021-06-11', 144, '2021-06-12 13:24:07', '2021-06-12 13:24:07'),
(49, 45, 'asd', '2021-06-11', 145, '2021-06-12 13:24:09', '2021-06-12 13:24:09'),
(49, 45, 'asd', '2021-06-11', 146, '2021-06-12 13:24:11', '2021-06-12 13:24:11'),
(50, 45, 'd', '2021-06-11', 147, '2021-06-12 13:27:44', '2021-06-12 13:27:44'),
(47, 45, 'a', '2021-06-12', 148, '2021-06-12 13:43:21', '2021-06-12 13:43:21'),
(47, 45, 'l', '2021-06-12', 149, '2021-06-12 13:43:34', '2021-06-12 13:43:34'),
(50, 45, 's', '2021-06-12', 150, '2021-06-12 13:43:44', '2021-06-12 13:43:44'),
(47, 53, 'a', '2021-06-12', 151, '2021-06-12 13:46:58', '2021-06-12 13:46:58'),
(49, 53, 'as', '2021-06-12', 152, '2021-06-12 13:47:10', '2021-06-12 13:47:10'),
(47, 51, 'a', '2021-06-12', 153, '2021-06-12 13:48:04', '2021-06-12 13:48:04'),
(49, 50, 'a', '2021-06-12', 154, '2021-06-12 13:49:11', '2021-06-12 13:49:11'),
(47, 44, 'a', '2021-06-12', 155, '2021-06-12 13:51:46', '2021-06-12 13:51:46'),
(76, 45, 'g', '2021-06-12', 157, '2021-06-12 14:18:12', '2021-06-12 14:18:12'),
(76, 45, 'k', '2021-06-12', 158, '2021-06-12 14:21:45', '2021-06-12 14:21:45'),
(47, 48, 'a', '2021-06-12', 160, '2021-06-12 16:44:00', '2021-06-12 16:44:00'),
(76, 48, 'a', '2021-06-12', 161, '2021-06-12 16:44:14', '2021-06-12 16:44:14'),
(56, 48, 'a', '2021-06-12', 162, '2021-06-12 16:44:20', '2021-06-12 16:44:20'),
(48, 45, 'l', '2021-06-14', 168, '2021-06-15 12:51:33', '2021-06-15 12:51:33');

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
(40, 51, 47),
(41, 53, 48),
(42, 43, 49),
(43, 44, 50),
(44, 49, 51),
(45, 50, 52),
(47, 46, 54),
(48, 47, 55),
(49, 48, 56),
(69, 45, 76);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre_producto` varchar(50) NOT NULL,
  `fecha_de_creacion` date NOT NULL,
  `marca` varchar(50) DEFAULT NULL,
  `modelo` varchar(20) DEFAULT NULL,
  `precio` int(10) UNSIGNED NOT NULL,
  `descripcion` mediumtext,
  `creado_por` int(10) UNSIGNED NOT NULL,
  `foto_product` varchar(1000) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cantidad_de_comentarios` bigint(20) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `nombre_producto`, `fecha_de_creacion`, `marca`, `modelo`, `precio`, `descripcion`, `creado_por`, `foto_product`, `createdAt`, `updatedAt`, `cantidad_de_comentarios`) VALUES
(47, 'Violin', '2021-06-07', 'X200', 'Fino', 100, 'Violin ', 51, 'violin.jpeg', '2021-06-07 18:12:11', '2021-06-12 16:44:00', 13),
(48, 'Guitarras', '2021-06-07', 'SS21', 'Coloridas', 200, 'guitarras de colores', 53, 'undefined-1623089590570.jpeg', '2021-06-07 18:13:10', '2021-06-15 12:51:33', 6),
(49, 'Maracas', '2021-06-07', 'Yamaha', 'Azules', 12, 'maracas', 43, 'undefined-1623089662948.jpeg', '2021-06-07 18:14:22', '2021-06-12 13:49:11', 7),
(50, 'Trompa', '2021-06-07', 'Yamaha', 'Z', 50, 'Trompa', 44, 'undefined-1623089737928.jpeg', '2021-06-07 18:15:37', '2021-06-12 13:43:44', 4),
(51, 'Bateria', '2021-06-07', 'OK', 'Roja', 60, 'Bateria roja', 49, 'undefined-1623089853252.jpeg', '2021-06-07 18:17:33', '2021-06-12 13:43:57', 1),
(52, 'Piano', '2021-06-07', '', 'Electrico', 200, 'Piano electrico', 50, 'undefined-1623089919674.jpeg', '2021-06-07 18:18:39', '2021-06-11 18:20:26', 11),
(54, 'Ukelele', '2021-06-07', '', 'Rosa', 120, 'Ukelele rosa ', 46, 'undefined-1623090036831.png', '2021-06-07 18:20:36', '2021-06-11 15:04:20', 1),
(55, 'Guitarra', '2021-06-07', 'Fender', 'Electrica', 400, 'Guitarra electrica', 47, 'undefined-1623090100073.jpeg', '2021-06-07 18:21:40', '2021-06-11 15:04:13', 1),
(56, 'Microfono', '2021-06-07', '1X00', 'Lancaster', 145, 'Microfono tremendo', 48, 'undefined-1623093524326.png', '2021-06-07 18:23:05', '2021-06-12 16:44:20', 3),
(76, 'Bateriaaa', '2021-06-12', '', '', 300, 'Alta bateria', 45, 'undefined-1624017615657.jpeg', '2021-06-12 13:45:10', '2021-06-18 12:00:15', 3);

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
  `foto_perfil` varchar(1000) NOT NULL DEFAULT 'undefined-1623092790999.png',
  `email` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `fecha_de_nacimiento`, `clave`, `cantidad_de_productos`, `seguidores`, `comentarios`, `foto_perfil`, `email`, `createdAt`, `updatedAt`) VALUES
(43, 'languila electrica', '2021-05-05', '$2a$10$0Ai82tdyiGdx9Bh/G5GJkuBr.QqBnvZrFgdKLH.pLzqEh4lwh0d5y', 4, 0, 0, 'undefined-1623092790999.png', 'languilaelectrica001@gmail.com', '2021-06-04 17:49:58', '2021-06-07 16:13:03'),
(44, 'langa capo ', '2021-05-01', '$2a$10$ate709pCWokLLBzGHUIp/Owq7stjVd6R2.LuGDD0cPaC6FxidyrQG', 1, 0, 1, 'undefined-1623092790999.png', 'langa2@gmail.com', '2021-06-04 17:49:58', '2021-06-12 13:51:46'),
(45, 'frodo rizzi', '2021-05-12', '$2a$10$aYDzdbU5oUfZi98BLMFqxesN1qPyM.yJfBAbZE.QarmkcJzNf.qIi', 1, 0, 32, '/undefined-1623092790999.png', 'frizzi@gmail.com', '2021-06-04 17:49:58', '2021-06-23 16:19:50'),
(46, 'timo gordo', '2021-05-06', '$2a$10$0wp6ggFeYprRk9DwgLWUiOJrXjhQVLi48XBEBCdfzF12AVxRCy7MG', 2, 0, 0, 'undefined-1623092790999.png', 'tmasic@gmail.com', '2021-06-04 17:49:58', '2021-06-07 16:13:03'),
(47, 'pehuen romani', '2021-05-14', '$2a$10$Y.cF6APlSLKkydqGmmjoAOl6PmEv7yiILCjiQn0zRAGWKxVEGxrgC', 3, 0, 0, 'undefined-1623092790999.png', 'iromani@gmail.com', '2021-06-04 17:49:58', '2021-06-07 16:13:03'),
(48, 'guido ponce', '2021-05-14', '$2a$10$eGTJDdIyZKE0PgDASji2ve.mN9LdC4tnr8iG25gpFSLKAWQyFhmVS', 1, 0, 4, '/undefined-1623092790999.png', 'gponce@gmail.com', '2021-06-04 17:49:58', '2021-06-12 16:44:20'),
(49, 'tu vi', '2021-05-06', '$2a$10$6Onql9tYbQ1kR7UB9EMuZ.ciNT/h01ZoGJKc19cpTXrb68aaO6qvu', 1, 0, 0, 'undefined-1623092790999.png', 'tuvi@gmail.com', '2021-06-04 17:49:58', '2021-06-07 16:13:03'),
(50, 'laquito', '2021-05-14', '$2a$10$sX5frc6A8mWm9YYUcgweJOGJkAMmnH4zcCgBwbCV0nG0Ew03g4.3W', 1, 0, 1, 'undefined-1623092790999.png', 'laquito@gmail.com', '2021-06-04 17:49:58', '2021-06-12 13:49:11'),
(51, 'walter', '2021-05-18', '$2a$10$.Cp5AMKsyvogW1kwSgOrgu3.pNXXvyw.rjAtUBxTWWxNTXYh4JfZa', 1, 0, 10, '/undefined-1623092790999.png', 'walter@gmail.com', '2021-06-04 17:49:58', '2021-06-12 13:48:33'),
(52, 'damian perez rizzi ', '2021-06-09', '$2a$10$5a5kzSi87EIm0T7AksJsrezjf5tZsySdFO21dDZ2WkAn9w0LFjc5.', 0, 0, 0, 'undefined-1623092790999.png', 'drizzi@gmail.com', '2021-06-04 17:49:58', '2021-06-07 16:13:03'),
(53, 'Langosta Maritima', '2021-06-10', '$2a$10$oDpwPf6S2xYha3dhwrYzieREIYsHSL0C7efcltLa0sykCcgChbWWa', 1, 0, 2, 'undefined-1623092790999.png', 'langostino@gmail.com', '2021-06-04 17:52:19', '2021-06-12 13:47:10'),
(54, 'broo', '2021-06-26', '$2a$10$5iVNIPeBV3NxPjPG3Uohzu4kBq9z37//0aI75xOq9zBRVUFI.9DX2', 0, 0, 0, 'undefined-1623092790999.png', 'brodieretallick@gmail.com', '2021-06-04 18:39:36', '2021-06-07 16:13:03'),
(55, 'Matteo ', '2021-06-01', '$2a$10$N8C0ovsPWB6QLNXv6tDfh.4EJoKw0l8Qq5i5mlSLq.LxZCjDYvLwm', 0, 0, 0, 'undefined-1623093431179.png', 'matteo.lang@gmail.com', '2021-06-07 18:37:43', '2021-06-07 19:17:11'),
(56, 'Usuario De Prueba', '2001-11-12', '$2a$10$o/JZTNtwJp2FOWGyxZHR3Oh8/XaJREBZ.zcSEsZD3bB/JE7uqvs3S', 0, 0, 0, '/undefined-1623092790999.png', 'usuarioprueba@gmail.com', '2021-06-12 16:52:43', '2021-06-12 16:55:21'),
(57, 'Matteo Lang', '2021-06-24', '$2a$10$Ea1QfCDdzgTe0OQyHHOL.uTspnz2e5rut8SqkxuB.b.KWy9xCne/2', 0, 0, 0, 'undefined-1623092790999.png', 'mlang@gmail.com', '2021-06-12 16:56:38', '2021-06-13 21:49:51');

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=169;

--
-- AUTO_INCREMENT de la tabla `productos_creados`
--
ALTER TABLE `productos_creados`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

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
