const http = require('http');
const env = require('./config/env'); // Importa a sua camada de configuração

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ 
    message: "Node.js Standard Template running perfectly!",
    environment: env.nodeEnv
  }));
});

server.listen(env.port, () => {
  console.log(`Server running on port ${env.port} in ${env.nodeEnv} mode`);
});
