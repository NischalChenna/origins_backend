'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'database-1.cwohutflqr2w.us-east-2.rds.amazonaws.com',
  user     : 'admin',
  password : '9949606624',
  database : 'origin_dev'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;