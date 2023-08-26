const axios = require('axios');
const config = require('../../configs/config');

const getCurrentForecast = async (lat, lon) => {
  const url = `${config.weatherBaseUrl}/data/2.5/forecast`;
  return await axios.get(url, {
    params: {
      lat,
      lon,
      appid: config.weatherApiKey,
    }
  })
}

module.exports = getCurrentForecast;