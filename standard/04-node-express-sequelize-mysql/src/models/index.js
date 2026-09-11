const { Sequelize } = require('sequelize');
const config = require('../config/database');
const env = require('../config/env');

const dbConfig = config[env.nodeEnv];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

const db = {
  sequelize,
  Sequelize
};

module.exports = db;
