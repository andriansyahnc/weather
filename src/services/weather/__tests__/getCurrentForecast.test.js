const axios = require('axios');
const getCurrentForecastService = require('../getCurrentForecast');
const forecast = require("../../../../tests/mock/forecast.data");
const config = require("../../../configs/config");
describe('Get Current Forecast', () => {
  it('should call axios with several parameter', async () => {
    const axiosSpy = jest.spyOn(axios, 'get');
    axiosSpy.mockResolvedValue(forecast);
    const lat = 44.34;
    const lon = 10.99;

    const result = getCurrentForecastService(lat, lon);
    expect(axiosSpy).toHaveBeenCalledWith(`${config.weatherBaseUrl}/data/2.5/forecast`, {
      params: {
        lat,
        lon,
        appid: config.weatherApiKey,
      }
    })
  });
});