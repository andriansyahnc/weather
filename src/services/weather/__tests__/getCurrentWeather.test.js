const axios = require('axios');
const getCurrentWeatherService = require('../getCurrentWeather');
const weather = require("../../../../tests/mock/weather.data");
const config = require("../../../configs/config");
describe('Get Current Weather', () => {
  it('should call axios with several parameter', async () => {
    const axiosSpy = jest.spyOn(axios, 'get');
    axiosSpy.mockResolvedValue(weather);
    const lat = 44.34;
    const lon = 10.99;

    const result = getCurrentWeatherService(lat, lon);
    expect(axiosSpy).toHaveBeenCalledWith(`${config.weatherBaseUrl}/data/2.5/weather`, {
      params: {
        lat,
        lon,
        appid: config.weatherApiKey,
      }
    })
  });
});