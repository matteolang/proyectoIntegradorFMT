-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 28, 2021 at 07:55 AM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `melodiic`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
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
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id_producto_comentado`, `id_autor`, `comentario`, `fecha_de_creacion`, `id`, `createdAt`, `updatedAt`) VALUES
(47, 45, 'De que madera esta hecho?', '2021-06-28', 169, '2021-06-28 07:45:21', '2021-06-28 07:45:21'),
(77, 45, 'muy copado. mas por los vecinos jajaj', '2021-06-28', 170, '2021-06-28 07:45:39', '2021-06-28 07:45:39'),
(76, 45, 'dale pls comprenlo', '2021-06-28', 171, '2021-06-28 07:45:56', '2021-06-28 07:45:56'),
(48, 45, 'buen producto langosta', '2021-06-28', 172, '2021-06-28 07:46:10', '2021-06-28 07:46:10'),
(49, 45, 'me gusto el color', '2021-06-28', 173, '2021-06-28 07:46:30', '2021-06-28 07:46:30'),
(77, 57, 'me lo bajas a 170?', '2021-06-28', 174, '2021-06-28 07:46:50', '2021-06-28 07:46:50'),
(50, 57, 'esta oxidado o ni?', '2021-06-28', 175, '2021-06-28 07:47:08', '2021-06-28 07:47:08'),
(56, 57, 'parece una maquinnita de pelo jajaja', '2021-06-28', 176, '2021-06-28 07:47:22', '2021-06-28 07:47:22'),
(49, 48, 'buenas maracas', '2021-06-28', 177, '2021-06-28 07:52:00', '2021-06-28 07:52:00'),
(77, 48, 'viene con palitos incluidos?', '2021-06-28', 178, '2021-06-28 07:52:41', '2021-06-28 07:52:41'),
(51, 48, 'linda kinga', '2021-06-28', 179, '2021-06-28 07:52:57', '2021-06-28 07:52:57'),
(48, 47, 'se venden por separado?', '2021-06-28', 180, '2021-06-28 07:53:35', '2021-06-28 07:53:35'),
(76, 54, 'me gusta', '2021-06-28', 181, '2021-06-28 07:54:10', '2021-06-28 07:54:10'),
(76, 54, 'hasta cuanto te estiras?', '2021-06-28', 182, '2021-06-28 07:54:23', '2021-06-28 07:54:23');

-- --------------------------------------------------------

--
-- Table structure for table `productos_creados`
--

CREATE TABLE `productos_creados` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `producto_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productos_creados`
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
(69, 45, 76),
(70, 64, 77);

-- --------------------------------------------------------

--
-- Table structure for table `products`
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
  `foto_product` varchar(1000) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cantidad_de_comentarios` bigint(20) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `nombre_producto`, `fecha_de_creacion`, `marca`, `modelo`, `precio`, `descripcion`, `creado_por`, `foto_product`, `createdAt`, `updatedAt`, `cantidad_de_comentarios`) VALUES
(47, 'Violin', '2021-06-07', 'X200', 'Fino', 100, 'Instrumento musical de cuerda , el más pequeño y agudo entre los de su clase , que se compone de una caja de resonancia en forma de 8, un mástil sin trastes y cuatro cuerdas que se hacen sonar con un arco .', 51, 'violin.jpeg', '2021-06-07 16:12:11', '2021-06-28 07:45:21', 1),
(48, 'Guitarras', '2021-06-07', 'SS21', 'Coloridas', 200, 'Vienen incluidas todas las guitarras que se ven en la imagen!', 53, 'undefined-1623089590570.jpeg', '2021-06-07 16:13:10', '2021-06-28 07:53:35', 2),
(49, 'Maracas', '2021-06-07', 'Yamaha', 'Azules', 12, 'Las maracas son un instrumento idiófono y de oscilación constituido por una parte esférica hueca sostenida por un mango que la atraviesa, o está adherida a ella. En su interior se le llena con pequeños elementos percusivos, como piedras pequeñas o semillas, pedazos de vidrio, pedazos pequeños de metal, arroz etc.', 43, 'undefined-1623089662948.jpeg', '2021-06-07 16:14:22', '2021-06-28 07:52:00', 2),
(50, 'Trompa', '2021-06-07', 'Yamaha', 'Z', 50, 'La trompa es un instrumento de viento-metal que tiene un carácter muy versátil y abarca una tesitura muy amplia con pocos cilindros. Además este instrumento puede emitir tanto sonidos suaves y dulces como ásperos y duros. ... La trompa está formada por un tubo estrecho y largo.', 44, 'undefined-1623089737928.jpeg', '2021-06-07 16:15:37', '2021-06-28 07:47:08', 1),
(51, 'Bateria', '2021-06-07', 'OK', 'Roja', 60, 'La batería es un conjunto de instrumentos musicales de percusión usado por muchas agrupaciones musicales. ... ​​ Este instrumento nació de la necesidad de producir diferentes percusiones en un solo sistema agrupado y cómodo para tocar simultáneamente por una sola persona.', 49, 'undefined-1623089853252.jpeg', '2021-06-07 16:17:33', '2021-06-28 07:52:57', 1),
(52, 'Piano', '2021-06-07', '', 'Electrico', 200, 'El piano electrónico o piano digital es un instrumento musical de teclado diseñado para emitir el timbre de un piano (y a veces el de un clave, un órgano u otros instrumentos) utilizando el sonido de un piano con sensores que definen la duración de una determinada nota.', 50, 'undefined-1623089919674.jpeg', '2021-06-07 16:18:39', '2021-06-28 09:51:26', 0),
(54, 'Ukelele', '2021-06-07', '', 'Rosa', 120, 'Ukelele rosa en perfecto estado, nuevo. ', 46, 'undefined-1623090036831.png', '2021-06-07 16:20:36', '2021-06-28 09:17:44', 1),
(55, 'Guitarra', '2021-06-07', 'Fender', 'Electrica', 400, 'La guitarra eléctrica es un tipo de guitarra, que a diferencia de la guitarra española y la guitarra acústica, su caja no hace resonancia, ya que esta es por inducción eléctrica a través de un Amplificador de guitarra o también a través de un Pedal de efectos.', 47, 'undefined-1623090100073.jpeg', '2021-06-07 16:21:40', '2021-06-28 09:17:44', 1),
(56, 'Microfono', '2021-06-07', '1X00', 'Lancaster', 145, 'Microfono para cantar karaoke o miles de usos mas. ', 48, 'undefined-1623093524326.png', '2021-06-07 16:23:05', '2021-06-28 07:47:22', 1),
(76, 'Bateria ', '2021-06-12', 'OK ', '', 400, 'Bateria nueva en perfecto estado. ', 45, 'undefined-1624017615657.jpeg', '2021-06-12 11:45:10', '2021-06-28 07:54:23', 3),
(77, 'Bateria Electrica', '2021-06-27', '', '', 200, 'Bateria electrica nueva en perfecto estado, casi sin uso.', 64, 'undefined-1624828987616.jpeg', '2021-06-27 19:23:07', '2021-06-28 07:52:41', 3);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
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
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `fecha_de_nacimiento`, `clave`, `cantidad_de_productos`, `seguidores`, `comentarios`, `foto_perfil`, `email`, `createdAt`, `updatedAt`) VALUES
(43, 'Soy Una Anguila Común ', '2001-05-05', '$2a$10$Y.F9IBLIAfoxYBdS6AyIve0a4WaduJ1rF3iTuDDxOGO80k6yazWTi', 1, 0, 0, 'undefined-1624863984001.jpg', 'languilaelectrica001@gmail.com', '2021-06-04 17:49:58', '2021-06-28 09:26:41'),
(44, 'Langa ', '1999-05-01', '$2a$10$y9CPS6Ol.ULwALOO4H8ww.q4xbj3qasEZeiBK47fvghfukzZNBr2O', 1, 0, 1, 'undefined-1624864230206.png', 'langa2@gmail.com', '2021-06-04 17:49:58', '2021-06-28 07:10:30'),
(45, 'Francisco Rizzi', '2001-10-12', '$2a$10$ZJTwFlfituA94GkUZolBpOMMbKyYPlc7a8bgfGdF.0qpeey1pYunu', 1, 0, 5, 'undefined-1624788419641.jpeg', 'frizzi@gmail.com', '2021-06-04 17:49:58', '2021-06-28 07:46:30'),
(46, 'Timoteo Masic', '2001-05-06', '$2a$10$O2ActSPnqBnvYqY.P4a7NeokTMXV2Zm5teFJT.G26k.NJNLvDZJSK', 2, 0, 0, 'undefined-1624864119204.jpg', 'tmasic@gmail.com', '2021-06-04 17:49:58', '2021-06-28 07:08:39'),
(47, 'pehuen romani', '2021-05-14', '$2a$10$LkYwKhw9zDf0SD08J6fUGe48VmCPY.xOzKYxt0Cc7ytCUH/Y/GqL.', 3, 0, 1, 'undefined-1624864409054.jpg', 'iromani@gmail.com', '2021-06-04 17:49:58', '2021-06-28 07:53:35'),
(48, 'guido ponce', '1998-05-14', '$2a$10$W3NQFfPXU8wJQBT0fg4UWOeq2bEaFluIiwwBUI5d0.HhI9Kwbxqc6', 1, 0, 3, 'undefined-1624864379926.jpg', 'gponce@gmail.com', '2021-06-04 17:49:58', '2021-06-28 07:52:57'),
(49, 'Luquitas Sanchez', '2003-05-06', '$2a$10$niSkZVzg2TokIXaQE9Qzd.f9X8R.v4FuiQv3geCqSejwQTx0ynZuW', 1, 0, 0, 'undefined-1624864596441.webp', 'lucassanchez@gmail.com', '2021-06-04 17:49:58', '2021-06-28 07:16:36'),
(50, 'Laquito', '2005-05-14', '$2a$10$mb/A8rLtIEw6hM7I3F1gWeh5DpvJMV1VLTChCgpUADZfqleEbVQ1y', 1, 0, 1, 'undefined-1623092790999.png', 'laquito@gmail.com', '2021-06-04 17:49:58', '2021-06-28 07:18:19'),
(51, 'Walter White', '1987-05-18', '$2a$10$u21qMeKOLbkyTLn8pZvULOoKZAiWQaY6TdaiNFcPgeq0oit/EmWFu', 1, 0, 10, 'undefined-1624864801126.jpg', 'walter@gmail.com', '2021-06-04 17:49:58', '2021-06-28 07:20:01'),
(52, 'Domingo Rizzi', '1997-06-09', '$2a$10$3pyx2pwWrXNSi1Glu87MUO9nvA1EkwF9xiZPkb3hu8OJhHGYDurWy', 0, 0, 0, 'undefined-1624864900481.jpg', 'drizzi@gmail.com', '2021-06-04 17:49:58', '2021-06-28 07:21:40'),
(53, 'Langosta Maritima', '2021-06-10', '$2a$10$oDpwPf6S2xYha3dhwrYzieREIYsHSL0C7efcltLa0sykCcgChbWWa', 1, 0, 2, 'undefined-1623092790999.png', 'langostino@gmail.com', '2021-06-04 17:52:19', '2021-06-12 13:47:10'),
(54, 'Brodie Retalick', '1988-06-26', '$2a$10$zaKWAhCBf9AnjsdilqI76.2cTBXZyYJST9xQTUCRZPMsmHy8dDRwS', 0, 0, 2, 'undefined-1624865308267.jpg', 'brodieretallick@gmail.com', '2021-06-04 18:39:36', '2021-06-28 07:54:23'),
(55, 'Matteo ', '2021-06-01', '$2a$10$N8C0ovsPWB6QLNXv6tDfh.4EJoKw0l8Qq5i5mlSLq.LxZCjDYvLwm', 0, 0, 0, 'undefined-1623093431179.png', 'matteo.lang@gmail.com', '2021-06-07 18:37:43', '2021-06-07 19:17:11'),
(56, 'Usuario De Prueba', '2001-11-12', '$2a$10$o/JZTNtwJp2FOWGyxZHR3Oh8/XaJREBZ.zcSEsZD3bB/JE7uqvs3S', 0, 0, 0, '/undefined-1623092790999.png', 'usuarioprueba@gmail.com', '2021-06-12 16:52:43', '2021-06-12 16:55:21'),
(57, 'Matteo Lang', '2001-06-24', '$2a$10$4eKglJZA2olIJBY8qIziqOULS5v046bYszZbRN0mO2O5IhtuqIo5C', 0, 0, 3, 'undefined-1624865400233.png', 'mlang@gmail.com', '2021-06-12 16:56:38', '2021-06-28 07:47:22'),
(60, 'Carlitos Tevez', '1990-06-08', '$2a$10$8rXi4jBGHeMsg0V1V.1lJO2UIrtYfe.Z4slCgu2PM/70kB6004mT2', 0, 0, 0, 'undefined-1624865542860.jpg', 'carlos@gmail.com', '2021-06-27 21:07:36', '2021-06-28 07:32:23'),
(64, 'Carlos Vives', '1965-06-01', '$2a$10$wPHdnntFVZJ6lyTgZ/6sOuII9jK46Il27AB927HQx/2nhYq0TAkxG', 1, 0, 0, 'undefined-1624865668082.webp', 'carlitos@gmail.com', '2021-06-27 21:16:50', '2021-06-28 07:34:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comentarios_ibfk_1` (`id_producto_comentado`),
  ADD KEY `comentarios_ibfk_2` (`id_autor`);

--
-- Indexes for table `productos_creados`
--
ALTER TABLE `productos_creados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productos_creados_ibfk_1` (`usuario_id`),
  ADD KEY `productos_creados_ibfk_2` (`producto_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_ibfk_1` (`creado_por`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=183;

--
-- AUTO_INCREMENT for table `productos_creados`
--
ALTER TABLE `productos_creados`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_producto_comentado`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_autor`) REFERENCES `usuarios` (`id`);

--
-- Constraints for table `productos_creados`
--
ALTER TABLE `productos_creados`
  ADD CONSTRAINT `productos_creados_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `productos_creados_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`creado_por`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
