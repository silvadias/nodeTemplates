const { Sequelize } = require('sequelize');
const config = require('./database');
const env = require('./env');

const dbConfig = config[env.nodeEnv];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

module.exports = sequelize;
