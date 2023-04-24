#!/bin/bash
# This script assumes you are running Ubuntu (any Debian based distro should work though)
# Switch to the frontend directory
cd ../frontend

# Install Node.js and npm
sudo apt update
sudo apt install -y nodejs npm

# Install project dependencies
npm install

# Start JSON server in the background
npm run json:server &

# Start the application
npm start
