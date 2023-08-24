const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT || 3035,
  weatherBaseUrl: process.env.WEATHER_BASE_URL,
  weatherApiKey: process.env.WEATHER_API_KEY,
}