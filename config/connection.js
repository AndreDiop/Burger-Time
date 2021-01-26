const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "trapstar",
  database: "burgers_db",
});

connection.connect(function (err) {
  if (err) {
    console.log("error connecting to you cause of" + err);
  }
  console.log("Mysql is hitting like a mack truck " + connection.threadId);
});

module.exports = connection;
