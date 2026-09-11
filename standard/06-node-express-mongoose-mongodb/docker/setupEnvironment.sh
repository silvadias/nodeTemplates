#!/bin/sh

set -e

echo "Starting application environment..."

echo "Installing dependencies..."
npm install

echo "Waiting for MySQL..."
node docker/waitForDatabase.js

echo "Running migrations..."
npm run db:migrate

echo "Running seed..."
npm run db:seed

echo "Starting application..."
exec npm run dev