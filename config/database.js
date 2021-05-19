const Sequelize = require('sequelize')

// const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPW, {
//     host: process.env.DBHOST,
//     dialect: 'mariadb',
//     dialectOptions: {connectTimeout: 1000}
//   });

const connectDB = async () => {
    try {
        const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPW, {
            host: process.env.DBHOST,
            dialect: 'mariadb',
            dialectOptions: {connectTimeout: 1000}
        });
        console.log(sequelize.config)
        // console.log(`DB Connected: ${host}`)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
  
  module.exports = connectDB