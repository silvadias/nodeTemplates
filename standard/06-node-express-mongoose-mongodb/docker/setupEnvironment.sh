#!/bin/sh

set -e

echo "Starting application environment..."

echo "Installing dependencies..."
npm install

echo "Waiting for Database..."
node docker/waitForDatabase.js

echo "Starting application..."
exec npm run dev
