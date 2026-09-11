const express = require('express');
const env = require('./config/env');
const sequelize = require('./config/sequelize');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  return res.status(200).json({
    message: "Node.js Standard Template with Express & Sequelize running perfectly!",
    status: "online"
  });
});


async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');

    app.listen(env.port, () => {
      console.log(`Express MVC server running on port ${env.port} in ${env.nodeEnv} mode`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
}

startServer();
