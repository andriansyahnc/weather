const weather = require("../../../../tests/mock/weather.data");
const getCurrentWeather = (lat, lon) => {
  if (lat === 0 && lon === 0) {
    throw new Error('Something wrong');
  }
  return weather;
}

module.exports = getCurrentWeather;