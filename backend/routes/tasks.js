const express = require("express");
const connection = require("../connection");
const router = express.Router();

/**
 * @swagger
 * '/tasks':
 *  get:
 *     tags:
 *     - Tasks
 *     summary: return all tasks
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */

router.get("/tasks", (req, res) => {
  var query =
    "SELECT * FROM tasks ORDER BY CAST(SUBSTRING(name, 6) AS SIGNED) ASC;";

  connection
    .query(query)
    .then((rows) => {
      return res.status(200).send({
        statusCode: 200,
        status: "success",
        data: rows,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        statusCode: 500,
        status: "error",
        error: error,
      });
    });
});

/**
 * @swagger
 * '/fillTableTasksRandomData':
 *   post:
 *     tags:
 *       - Tasks
 *     summary: Fill the tasks table with random sample data
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */

router.post("/fillTableTasksRandomData", (req, res) => {
  // Step 1: Delete all existing entries in the database
  let sqlDeleteAllEntries = `DELETE FROM tasks;`;

  connection
    .query(sqlDeleteAllEntries)
    .then((deleteResult) => {
      // Step 2: Insert sample data after deletion
      let sqlInsertSampleData = `
        INSERT INTO tasks (name, description)
        VALUES
        ('Task-1', 'Implementar un nuevo botón en la interfaz de usuario.'),
        ('Task-2', 'Resolver problemas de conexión SSL para garantizar la seguridad.'),
        ('Task-3', 'Migrar el servidor web a Nginx para mejorar el rendimiento.'),
        ('Task-4', 'Mover la base de datos a un servicio en la nube como AWS o Azure.'),
        ('Task-5', 'Utilizar Kubernetes para orquestar y gestionar contenedores de la aplicación.'),
        ('Task-6', 'Asegurarse de que todas las dependencias del proyecto estén actualizadas.'),
        ('Task-7', 'Reducir el tamaño de las imágenes para mejorar el tiempo de carga de la aplicación.'),
        ('Task-8', 'Añadir una capa adicional de seguridad mediante la autenticación de dos factoreturn res.'),
        ('Task-9', 'Evaluar el rendimiento de la aplicación mediante pruebas exhaustivas.'),
        ('Task-10', 'Establecer un sistema de copias de seguridad automáticas para prevenir pérdida de datos.'),
        ('Task-11', 'Mantener la documentación del código actualizada para facilitar el desarrollo futuro.'),
        ('Task-12', 'Mejorar el rendimiento de las consultas a la base de datos mediante índices.'),
        ('Task-13', 'Automatizar el proceso de integración y despliegue para entregas más rápidas y seguras.'),
        ('Task-14', 'Implementar herramientas de monitoreo para supervisar el rendimiento.');
      `;

      return connection.query(sqlInsertSampleData);
    })
    .then((insertResult) => {
      return res.status(200).send({
        statusCode: 200,
        status: "success",
        text: "Deleted existing entries and added sample data successfully",
      });
    })
    .catch((error) => {
      return res.status(500).send({
        statusCode: 500,
        status: "error",
        text: "Internal Server Error",
      });
    });
});

module.exports = router;