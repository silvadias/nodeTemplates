const mongoose = require('mongoose');
const env = require('../src/config/env');

const retryDelay = 2000;
const maxWaitTime = 20 * 60 * 1000;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkDatabase() {
  try {
    await mongoose.connect(env.database.uri);
    await mongoose.disconnect();
    return true;
  } catch (error) {
    return false;
  }
}

async function waitForDatabase() {
  const startTime = Date.now();
  let attempt = 0;

  console.log('Waiting for Database...');

  while (true) {
    attempt++;

    if (await checkDatabase()) {
      const elapsed = Math.round((Date.now() - startTime) / 1000);
      console.log(`Database is ready! (${elapsed}s, attempt ${attempt})`);
      return;
    }

    const elapsed = Date.now() - startTime;

    if (elapsed >= maxWaitTime) {
      console.error('Database did not become ready within 20 minutes.');
      process.exit(1);
    }

    if (attempt % 10 === 0) {
      console.log(`Database still unavailable. Waiting... (${Math.round(elapsed / 1000)}s)`);
    }

    await sleep(retryDelay);
  }
}

waitForDatabase();
