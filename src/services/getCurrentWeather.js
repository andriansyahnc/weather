const axios = require('axios');
const config = require('../configs/config');

const getCurrentWeather = async (lat, lon) => {
  const url = `${config.weatherBaseUrl}/data/2.5/weather`;
  await axios.get(url, {
    params: {
      lat,
      lon,
      appid: config.weatherApiKey,
    }
  })
}

module.exports = getCurrentWeather;