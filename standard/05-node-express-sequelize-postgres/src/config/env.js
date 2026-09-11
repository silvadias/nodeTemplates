// 🚀 Template by: Luis Carlos da Silva Dias (https://github.com)
require('dotenv').config();

const env = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',

  database: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    name: process.env.DB_NAME,
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
  },
};

module.exports = env;
