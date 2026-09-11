require('dotenv').config();

const env = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',

  database: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    name: process.env.DB_NAME,
    user: 'root', 
    password: process.env.DB_ROOT_PASSWORD,
  },
};

module.exports = env;
