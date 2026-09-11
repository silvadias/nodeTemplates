// 🚀 Template by: Luis Carlos da Silva Dias (https://github.com)
const { Sequelize } = require('sequelize');
const config = require('./database');
const env = require('./env');

const dbConfig = config[env.nodeEnv];

// Inicializa e exporta estritamente a instância de conexão ativa
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

module.exports = sequelize;
