const mysql= require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DB_PW,
  database: "burger_db"
});

connection.connect(function(err) {
  if (err){
    console.log(err);
    return
  }
  console.log("Connected as id " + connection.threadId)
});

module.exports = connection;