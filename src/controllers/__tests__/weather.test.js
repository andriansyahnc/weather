const request = require('supertest');
const app = require('../../app');
const weather = require("../../../tests/mock/weather.data");

jest.mock('../../services/weather/getCurrentWeather');

describe('Weather', () => {
  it('should call the weather service and return 200', async () => {
    const response = await request(app.server).get('/weather')
      .query({
        lat: 44.34,
        lon: 10.99
      });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ data: weather, status: "OK"});
  });
});