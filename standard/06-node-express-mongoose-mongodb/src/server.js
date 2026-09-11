const express = require('express');
const mongoose = require('mongoose');
const env = require('./config/env');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  return res.status(200).json({
    message: "Node.js Standard Template with Express & Mongoose NoSQL running perfectly!",
    status: "online"
  });
});

async function startServer() {
  try {
    await mongoose.connect(env.database.uri);
    console.log('MongoDB cluster connection established successfully.');

    app.listen(env.port, () => {
      console.log(`Express NoSQL server running on port ${env.port} in ${env.nodeEnv} mode`);
    });
  } catch (error) {
    console.error('Unable to connect to the MongoDB cluster:', error);
    process.exit(1);
  }
}

startServer();
