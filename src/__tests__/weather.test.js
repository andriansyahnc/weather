const request = require('supertest');
const app = require('../app');

describe('Weather', () => {
  it('should get the weather data and return 200', async () => {
    const response = await request(app.server).get('/weather');
    expect(response.status).toBe(200);
  });
});