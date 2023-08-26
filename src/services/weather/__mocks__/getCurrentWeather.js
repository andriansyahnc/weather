const weather = require("../../../../tests/mock/getCurrentWeather.data");
const getCurrentWeather = (lat, lon) => {
  if (lat === 0 && lon === 0) {
    throw new Error('Something wrong');
  }
  return {
    data: weather,
  };
}

module.exports = getCurrentWeather;