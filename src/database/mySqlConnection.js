const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT, // Define em qual porta o banco de dados vai rodar.
  user: process.env.MYSQL_USER, // Usuário do banco de dados.
  password: process.env.MYSQL_PASSWORD, // senha do usuário do banco de dados.
  database: process.env.MYSQL_DATABASE, // Define qual banco de dados você irá utilizar.
});

module.exports = connection;