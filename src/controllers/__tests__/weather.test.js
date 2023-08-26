const request = require('supertest');
const app = require('../../app');
const weather = require("../../../tests/mock/getCurrentWeather.data");

jest.mock('../../services/weather/getCurrentWeather');

describe('Weather', () => {
  it('should return 200 OK', async () => {
    const response = await request(app.server).get('/weather')
      .query({
        lat: 44.34,
        lon: 10.99
      });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "OK", data: weather });
  });

  it('should return 500 Internal Server Error', async () => {
    const response = await request(app.server).get('/weather')
      .query({
        lat: 0,
        lon: 0
      });
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ status: "NOTOK", message: "Something wrong", stack: expect.anything() });
  });
});