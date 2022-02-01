const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ashish_4040",
    database: "user_database"
});


module.exports=conn;