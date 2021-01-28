const { Pool } = require('pg');
require('dotenv').config();

// Feel free to add your own settings,
// e.g. DB connection settings
const originsAllowed = [
  'http://localhost:8080',
  'http://localhost:52540',
  'https://test-hunger-games.netlify.app',
  'https://dev-hunger-games.netlify.app',
  'https://remote-hungergames.jsrover.wilders.dev',
];
const nbConfirm = 3;

const db = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 5432,
  ssl: process.env.DB_SSL === 'true',
});

module.exports = {
  port: process.env.PORT || 5000,
  ROBOTOFF_API_URL: process.env.ROBOTOFF_API_URL,
  OFF_API_URL: process.env.OFF_API_URL,
  OFF_IMAGE_URL: process.env.OFF_IMAGE_URL,
  originsAllowed,
  db,
  nbConfirm,
};
