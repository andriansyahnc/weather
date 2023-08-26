const getCurrentWeatherService = require("../services/weather/getCurrentForecast");
const getCurrentWeather = async (req, res) => {
  const { lat, lon } = req.query;
  const currentWeatherData = await getCurrentWeatherService(lat, lon);
  return res.status(200).send({ status: "OK", data: currentWeatherData.data })
}

module.exports = { getCurrentWeather };