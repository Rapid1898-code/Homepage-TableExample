// Not needed anymore...

import Sequelize from 'sequelize';
import ScoreModel from './models/scores';

// const sequelize = new Sequelize('users', 'test', 'test1234', {
const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPW, {
  host: process.env.DBHOST,
  dialect: 'mariadb',
  dialectOptions: {connectTimeout: 1000}
});

const Score = ScoreModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  console.log(`Users db and user table have been created`);
});

module.exports = Score;