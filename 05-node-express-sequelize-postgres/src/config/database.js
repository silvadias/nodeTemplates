// 🚀 Template by: Luis Carlos da Silva Dias (https://github.com)
const env = require('./env');

module.exports = {
  development: {
    username: env.database.user,
    password: env.database.password,
    database: env.database.name,
    host: env.database.host,
    port: env.database.port,
    dialect: 'postgres',
    logging: console.log,
    define: {
      timestamps: true,
      underscored: true,
    }
  },
  production: {
    username: env.database.user,
    password: env.database.password,
    database: env.database.name,
    host: env.database.host,
    port: env.database.port,
    dialect: 'postgres', 
    logging: false
  }
};
