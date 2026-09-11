const mongoose = require('mongoose');
const env = require('../src/config/env'); 

const maxAttempts = 30;
const retryDelay = 2000;

async function waitForDatabase() {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {

      await mongoose.connect(env.database.uri);
      
      await mongoose.disconnect();
      
      console.log('MongoDB is ready and accepting connections!');
      return;
    } catch (error) {
      console.log(
        `Waiting for MongoDB... attempt ${attempt}/${maxAttempts}`
      );
      
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
    }
  }

  console.error('MongoDB did not become available in time.');
  process.exit(1);
}

waitForDatabase();
