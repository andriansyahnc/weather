const axios = require('axios');
const getCurrentWeatherService = require('../getCurrentWeather');
const getCurrentWeatherData = require('../../../../tests/mock/getCurrentWeather.data');
const cityRepository = require('../../../repositories/cityRepository');
const forecastRepository = require('../../../repositories/forecastRepository');

jest.mock('../../../repositories/cityRepository');
jest.mock('../../../repositories/forecastRepository');

describe('Get Current Weather', () => {
  it('should just fetch', async () => {
    const axiosGet = jest.spyOn(axios, 'get');

    const lat = 44.34;
    const lon = 10.99;
    const city = "city";
    const state = "state";
    const country = "country";

    cityRepository.findOne.mockResolvedValueOnce({
      id: 1,
    })
    forecastRepository.findByCity.mockResolvedValueOnce(getCurrentWeatherData)

    const returnData = await getCurrentWeatherService(lat, lon, city, state, country);
    expect(returnData).toEqual(getCurrentWeatherData);
    expect(axiosGet).toHaveBeenCalledTimes(0);
  });
});