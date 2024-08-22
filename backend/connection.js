const mariadb = require("mariadb");

console.log(
  { user: process.env.DB_USERNAME },
  { password: process.env.DB_PASSWORD },
  { name: process.env.DB_NAME },
  { host: process.env.DB_HOST },
  { port: parseInt(process.env.DB_PORT || "3306") }
);

const connection = mariadb.createPool({
  multipleStatements: true,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || "3306"),
});
// acquireTimeout: 300000,

connection
  .getConnection()
  .then((conn) => {
    console.log(
      `Connected and listening on ${process.env.DB_HOST}:${process.env.PORT}`
    );
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
