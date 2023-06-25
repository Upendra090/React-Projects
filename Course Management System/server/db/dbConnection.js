const mysql = require("mysql2");

const host = process.env.DATABASE_HOST;
const dbDatabase = process.env.DATABASE;
const dbUsername = process.env.DATABASE_USERNAME;
const dbPassword = process.env.DATABASE_PASSWORD;
const dbPort = process.env.DATABASE_PORT;

const connection = mysql.createConnection({
  host: host,
  user: dbUsername,
  databse: dbDatabase,
  password: dbPassword,
  port: dbPort,
});

module.exports = connection;
