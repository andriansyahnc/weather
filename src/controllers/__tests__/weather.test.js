const request = require('supertest');
const app = require('../../app');
const weather = require("../../../tests/mock/forecast.data");

jest.mock('../../services/weather/getCurrentForecast');

describe('Weather', () => {
  it('should call the forecast service and return 200', async () => {
    const response = await request(app.server).get('/weather')
      .query({
        lat: 44.34,
        lon: 10.99
      });
    expect(response.body).toEqual({ data: weather, status: "OK"});
    expect(response.status).toBe(200);
  });
});