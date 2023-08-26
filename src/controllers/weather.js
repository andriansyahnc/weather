const getCurrentWeatherService = require("../services/weather/getCurrentWeather");
const getCurrentWeather = async (req, res) => {
  const { lat, lon, city, state, country } = req.query;
  try {
    const currentWeatherData = await getCurrentWeatherService(lat, lon, city, state, country);
    return res.status(200).send({ status: "OK", data: currentWeatherData.data })
  } catch (e) {
    console.error(e);
    return res.status(500).send({ status: "NOTOK", message: e.message, stack: e.stack });
  }

}

module.exports = { getCurrentWeather };