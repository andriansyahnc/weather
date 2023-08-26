const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT || 3035,
  weatherBaseUrl: process.env.WEATHER_BASE_URL,
  weatherApiKey: process.env.WEATHER_API_KEY,
  database: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  nodeEnv: process.env.NODE_ENV,
}