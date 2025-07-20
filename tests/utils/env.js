// Load and export environment variables for tests

const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Load environment variables from .env file
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else {
  console.warn('No .env file found at', envPath);
  dotenv.config(); // Try to load from default locations
}

// Define environment variables with defaults
const config = {
  baseUrl: process.env.BASE_URL || 'https://elearning23.com',
  credentials: {
    username: process.env.USERNAME || 'default@example.com',
    password: process.env.PASSWORD || 'defaultpassword',
  },
  // Add any other config values you need
};

// Function to get configuration
function getConfig() {
  return config;
}

module.exports = { getConfig };
