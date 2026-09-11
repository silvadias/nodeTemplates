const mysql = require('mysql2/promise');

const retryDelay = 2000;
const maxWaitTime = 20 * 60 * 1000;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkDatabase() {
  let connection;

  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      connectTimeout: 3000,
    });

    await connection.query('SELECT 1');

    return true;
  } catch (error) {
    return false;
  } finally {
    if (connection) {
      await connection.end().catch(() => {});
    }
  }
}

async function waitForDatabase() {
  const startTime = Date.now();
  let attempt = 0;

  console.log('Waiting for MySQL...');

  while (true) {
    attempt++;

    if (await checkDatabase()) {
      const elapsed = Math.round(
        (Date.now() - startTime) / 1000
      );

      console.log(
        `Database is ready! (${elapsed}s, attempt ${attempt})`
      );

      return;
    }

    const elapsed = Date.now() - startTime;

    if (elapsed >= maxWaitTime) {
      console.error(
        'Database did not become ready within 20 minutes.'
      );

      process.exit(1);
    }

    if (attempt % 10 === 0) {
      console.log(
        `Database still unavailable. Waiting... (${Math.round(
          elapsed / 1000
        )}s)`
      );
    }

    await sleep(retryDelay);
  }
}

waitForDatabase();