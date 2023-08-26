const request = require('supertest');
const app = require('../../app');
const weather = require("../../../tests/mock/getCurrentWeather.data");
const forecast = require("../../../tests/mock/forecast.data");

const cityRepository = require('../../repositories/cityRepository');
const forecastRepository = require('../../repositories/forecastRepository');

describe('Weather', () => {
  it('should find a city, get existing forecast', async () => {
    cityRepository.findOne = jest.fn().mockResolvedValueOnce({
      cityId: 1,
    });
    forecastRepository.findByCity = jest.fn().mockResolvedValueOnce({
      ...weather
    });

    const response = await request(app.server).get('/weather')
      .query({
        lat: 44.34,
        lon: 10.99
      });
    expect(response.body).toEqual({ data: weather, status: "OK" });
    expect(response.status).toBe(200);
  });

  it('should find a city, create some forecasts', async () => {
    cityRepository.findOne = jest.fn().mockResolvedValueOnce({
      cityId: 1,
    });
    forecastRepository.findByCity = jest.fn().mockResolvedValueOnce(null);
    forecastRepository.create3hrForecast = jest.fn().mockResolvedValueOnce({
      ...weather
    });

    const response = await request(app.server).get('/weather')
      .query({
        lat: 44.34,
        lon: 10.99
      });
    expect(response.body).toEqual({ data: weather, status: "OK" });
    expect(response.status).toBe(200);
  });
});