-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 06-02-2023 a las 02:20:04
-- Versión del servidor: 8.0.27
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdafiliaccion1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `simpatizantes`
--

DROP TABLE IF EXISTS `simpatizantes`;
CREATE TABLE IF NOT EXISTS `simpatizantes` (
  `cveElectoral` varchar(18) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `curp` varchar(18) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `nombre` varchar(35) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `apaterno` varchar(35) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `amaterno` varchar(35) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha_nac` varchar(12) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `sexo` varchar(1) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `domicilio` varchar(35) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `colonia` varchar(35) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `localidad` varchar(35) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `municipio` varchar(35) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `estado` varchar(35) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `numtelefono` varchar(10) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `facebook` varchar(35) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `instagram` varchar(35) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `otrared` varchar(35) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `userName` varchar(35) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `idcliente` varchar(4) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `cvesec` varchar(4) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`cveElectoral`),
  KEY `bdafiliaccion_idcliente_simpatizantes` (`idcliente`),
  KEY `bdafiliaccion_userName_simpatizantes` (`userName`),
  KEY `bdafiliaccion_cvesec_simpatizantes` (`cvesec`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `simpatizantes`
--

INSERT INTO `simpatizantes` (`cveElectoral`, `curp`, `nombre`, `apaterno`, `amaterno`, `fecha_nac`, `sexo`, `domicilio`, `colonia`, `localidad`, `municipio`, `estado`, `numtelefono`, `facebook`, `instagram`, `otrared`, `userName`,`cvesec`, `idcliente`) VALUES
('MNNTMR88061507M100', 'MANM880615MCSNTR02', 'MARIA', 'MANUEL', 'NATAREN', '15/06/1988', 'M', 'C SIN NOMBRE S/N', 'RIA HUIZACHAL', 'TUXTLA GUTIERREZ', '102-TUXTLA GUTIERREZ', '7-CHIAPAS', '9612050440', 'SIN CUENTA', 'SIN CUENTA', 'SIN CUENTA', 'jesus.herrera@afiliaccion.net',  '1734','P001'),
('NTOVAR70081107M400', 'NAOA700811MCSTVR05', 'ARACELI', 'NATAREN', 'OVANDO', '11/08/1970', 'M', 'C JUAN JOSE CALZADA 13', 'BARR NUEVO', 'TUXTLA GUTIERREZ', '102-TUXTLA GUTIERREZ', '7-CHIAPAS', '9611348541', 'SIN CUENTA', 'SIN CUENTA', 'SIN CUENTA', 'abel.perez@afiliaccion.net',  '1734','P001'),
('NZGTNR870907M300', 'NUGN870907MCSXTR05', 'NORMA ISELA', 'NUNEZ', 'GUTIERREZ ', '07/09/1987', 'M', 'C CEDRO MZA 15 LT5', 'COL BUROCRATICA', 'TUXTLA GUTIERREZ', '102-TUXTLA GUTIERREZ', '7-CHIAPAS', '9615803898', 'SIN CUENTA', 'SIN CUENTA', 'SIN CUENTA', 'hector.nuricumbo@afiliaccion.net',  '1734','P001'),
('RDSNJL72052907H100', 'ROSJ720529HCSDNL08', 'JULIAN', 'RODRIGUEZ', 'SANCHEZ', '29/05/1972', 'H', 'AV ALDAMA 17', 'BARR NICATAN ', 'TUXTLA GUTIERREZ', '102-TUXTLA GUTIERREZ', '7-CHIAPAS', '9611987465', 'SIN CUENTA', 'SIN CUENTA', 'SIN CUENTA', 'abel.perez@afiliaccion.net',  '1734','P001'),
('T13458092512345678', 'CALS0MP7AWÑBDPQL3', 'SONIA ISABEL ', 'CAMILO', 'LOPEZ', '2003-01-16', 'M', '2 AV NORTE PT. SUR SN', 'LA CANDELARIA ', 'BUENOS AIRES', '102Tuxtla Gutiérrez', '7Chiapas', '9921243498', 'Isabel camilo', 'Miss Isabel ', 'Ninguna ', 'jesus.herrera@afiliaccion.net',  '1604','P001'),
('VLGRED73111907H300', 'VEGE731119HCSLRD09', 'EDGARDO', 'VELAZQUEZ', 'GARCIA', '19/11/1931', 'H', 'EL CONGRESO SN', 'RIA EL CONGRESO', 'TUXTLA GUTIERREZ', '102-TUXTLA GUTIERREZ', '7-CHIAPAS', '9611697346', 'SIN CUENTA', 'SIN CUENTA', 'SIN CUENTA', 'hector.nuricumbo@afiliaccion.net',  '1734','P001');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `simpatizantes`
--
ALTER TABLE `simpatizantes`
  ADD CONSTRAINT `bdafiliaccion_cvesec_simpatizantes` FOREIGN KEY (`cvesec`) REFERENCES `seccion` (`cvesec`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
