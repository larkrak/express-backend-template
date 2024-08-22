

-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         11.1.0-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para sample
CREATE DATABASE IF NOT EXISTS `sample` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `sample`;


-- Volcando estructura para tabla sample.tasks
CREATE TABLE IF NOT EXISTS `tasks` (
  `name` varchar(25) UNIQUE DEFAULT '',
  `description` varchar(255) DEFAULT '',
  `status` ENUM('finished', 'in-progress', 'pending') DEFAULT 'pending',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla sample.tasks: 11 rows
DELETE FROM `tasks`;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` (`name`, `description`) VALUES
        ('Task-1', 'Implementar un nuevo botón en la interfaz de usuario.'),
        ('Task-2', 'Resolver problemas de conexión SSL para garantizar la seguridad.'),
        ('Task-3', 'Migrar el servidor web a Nginx para mejorar el rendimiento.'),
        ('Task-4', 'Mover la base de datos a un servicio en la nube como AWS o Azure.'),
        ('Task-5', 'Utilizar Kubernetes para orquestar y gestionar contenedores de la aplicación.'),
        ('Task-6', 'Asegurarse de que todas las dependencias del proyecto estén actualizadas.'),
        ('Task-7', 'Reducir el tamaño de las imágenes para mejorar el tiempo de carga de la aplicación.'),
        ('Task-8', 'Añadir una capa adicional de seguridad mediante la autenticación de dos factores.'),
        ('Task-9', 'Evaluar el rendimiento de la aplicación mediante pruebas exhaustivas.'),
        ('Task-10', 'Establecer un sistema de copias de seguridad automáticas para prevenir pérdida de datos.'),
        ('Task-11', 'Mantener la documentación del código actualizada para facilitar el desarrollo futuro.'),
        ('Task-12', 'Mejorar el rendimiento de las consultas a la base de datos mediante índices.'),
        ('Task-13', 'Automatizar el proceso de integración y despliegue para entregas más rápidas y seguras.'),
        ('Task-14', 'Implementar herramientas de monitoreo para supervisar el rendimiento.');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
