const mysql = require('mysql2/promise');
require('dotenv').config({path: './config/.env'})

const connectDB = async () => {
  try {
    const conn = await mysql.createConnection({
      // host: 'localhost',
      // user: 'root',
      // password: process.env.DBPW_LOCAL,
      // port: 3306,      
      // database: 'levermann'  

      host: 'nl1-ss18.a2hosting.com',
      user: 'rapidtec_Rapid1898',  
      password: process.env.DBPW_A2HOSTED,  
      port: 3306,            
      database: 'rapidtec_levermann'  
    })
    return conn
  }
  catch (err) {
    console.error(err)
    process.exit(1) 
  }
}

module.exports = connectDB