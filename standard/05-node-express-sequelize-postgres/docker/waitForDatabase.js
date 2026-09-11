const net = require('net');

const host = process.env.DB_HOST;
const port = Number(process.env.DB_PORT);

const maxAttempts = 60;
const retryDelay = 2000;

function checkDatabase() {
  return new Promise((resolve) => {
    const socket = net.createConnection(
      {
        host,
        port,
      },
      () => {
        socket.destroy();
        resolve(true);
      }
    );

    socket.on('error', () => {
      socket.destroy();
      resolve(false);
    });
  });
}

async function waitForDatabase() {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const isAvailable = await checkDatabase();

    if (isAvailable) {
      console.log('Database is ready!');
      return;
    }

    console.log(
      `Waiting for Database... attempt ${attempt}/${maxAttempts}`
    );

    await new Promise((resolve) => {
      setTimeout(resolve, retryDelay);
    });
  }

  console.error('Database did not become available in time.');
  process.exit(1);
}

waitForDatabase();
