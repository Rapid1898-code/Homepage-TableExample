const mysql = require('mysql');
require('dotenv').config({path: './config/.env'})

const connectDB = async () => {
  try {
    await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: process.env.DBPW_LOCAL,
      database: 'levermann'  
    })
  }
  catch (err) {
    console.error(err)
    process.exit(1) 
  }
}

connectDB.connect((err) => {
    if(err){
      console.log('Error connecting to Db')
      return;
    }
    console.log('Connection established')
  })

module.exports = connectDB