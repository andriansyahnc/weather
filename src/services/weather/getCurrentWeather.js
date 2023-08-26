const axios = require('axios');
const config = require('../../configs/config');
const cityRepository = require('../../repositories/cityRepository');
const forecastRepository = require('../../repositories/forecastRepository');
const dayjs = require('dayjs');

const fetchAndSaveForecasts = async (lat, lon, cityId) => {
  const url = `${config.weatherBaseUrl}/data/2.5/forecast`;
  const forecasts = await axios.get(url, {
    params: {
      lat,
      lon,
      appid: config.weatherApiKey,
    }
  });

  const { list } = forecasts.data;

  if (list.length === 0) {
    throw new Error('No data');
  }

  const forecastsData = [];

  for (const forecast of list) {
    const forecastRow = await forecastRepository.create3hrForecast({
      tsStart: forecast.dt,
      tsEnd: dayjs(forecast.dt).add('3', 'hour').unix(),
      temperature: forecast.main.temp,
      description: `${forecast.weather[0].main} (${forecast.weather[0].description})`,
      icon: forecast.weather[0].icon,
      cityId: cityId,
    });
    forecastsData.push(forecastRow);
  }

  return forecastsData[0];
}
const getCurrentWeather = async (lat, lon, city, state, country) => {
  let cityData = await cityRepository.findOne({ lat, lon });
  if (!cityData) {
    cityData = await cityRepository.create({
      lat, lon, city, state, country
    });
  }

  let forecastData = await forecastRepository.findByCity(cityData.id);
  if (!forecastData) {
    forecastData = await fetchAndSaveForecasts(lat, lon, cityData.id);
  }

  return forecastData;
}

module.exports = getCurrentWeather;