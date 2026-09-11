#!/bin/sh

set -e

echo "Starting application environment..."

echo "Installing dependencies..."
npm install --no-audit --no-fund

echo "Waiting for Database..."
node docker/waitForDatabase.js

echo "Starting application..."

npm run dev 
