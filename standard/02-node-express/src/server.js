const express = require('express');
const env = require('./config/env');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({
    message: "Node.js Standard Template with Express running perfectly inside Docker!",
    status: "online",
    environment: env.nodeEnv
  });
});

app.listen(env.port, () => {
  console.log(`Express server running on port ${env.port} in ${env.nodeEnv} mode`);
});
