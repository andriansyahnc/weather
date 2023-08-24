const axios = require('axios');
const config = require('../../configs/config');

const findCountry = (countryName) => {
  const url = `${config.weatherBaseUrl}/geo/1.0/direct`;
  return axios.get(url, {
    params: {
      q: countryName,
      limit: 5,
      appid: config.weatherApiKey,
    }})
}

module.exports = findCountry;