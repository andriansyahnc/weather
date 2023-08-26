const getCurrentWeatherService = require("../services/weather/getCurrentWeather");
const getCurrentWeather = async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const currentWeatherData = await getCurrentWeatherService(lat, lon);
    return res.status(200).send({ status: "OK", data: currentWeatherData.data })
  } catch (e) {
    return res.status(500).send({ status: "NOTOK", message: e.message });
  }

}

module.exports = { getCurrentWeather };