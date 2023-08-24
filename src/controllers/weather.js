const getCurrentWeatherService = require("../services/weather/getCurrentWeather");
const getCurrentWeather = async (req, res) => {
  const { lat, lon } = req.query;
  const currentWeatherData = await getCurrentWeatherService(lat, lon);
  return res.status(200).send({ ...currentWeatherData, status: "OK" })
}

module.exports = { getCurrentWeather };