const mysql = require('mysql');
require('dotenv').config({path: './config/.env'})

const connectDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DBPW_LOCAL,
  database: 'levermann'  
});
connectDB.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  }); 

module.exports = connectDB