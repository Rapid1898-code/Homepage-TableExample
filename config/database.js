const Sequelize = require('sequelize')
const Scores = require('../models/Scores')

const connectDB = async () => {
    try {
        const sequelize = new Sequelize(process.env.DBN, process.env.DBUSER, process.env.DBPW, {
            host: process.env.DBHOST,
            dialect: 'mariadb',
            dialectOptions: {connectTimeout: 5000}
        });
        console.log(`DB Connected: ${sequelize.config.host} ${sequelize.config.host}...`)

        try {
          await sequelize.authenticate();
          console.log('Connection has been established successfully.');
        } 
          catch (error) {
          console.error('Unable to connect to the database:', error);
        } 

    } catch (err) {
      console.error('Unable to connect to the database:', error);
      process.exit(1)
    }
  }

// Find all users
const scores = Scores.findAll();
console.log(scores.every(scores => scores instanceof User)); // true
console.log("All users:", JSON.stringify(scores, null, 2));


module.exports = connectDB