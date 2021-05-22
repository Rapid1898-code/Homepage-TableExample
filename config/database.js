const mysql = require('mysql');
require('dotenv').config({path: './config/.env'})

const connectDB = mysql.createConnection({
  // host: 'localhost',
  // user: 'root',
  // password: process.env.DBPW_LOCAL,
  // database: 'levermann'  
  
  host: 'nl1-ss18.a2hosting.com',
  user: 'rapidtec_Rapid1898',  
  password: process.env.DBPW_A2HOSTED,  
  database: 'rapidtec_levermann'  
});
connectDB.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  }); 

module.exports = connectDB