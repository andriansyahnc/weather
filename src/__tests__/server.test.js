const request = require('supertest');
const app = require('../app');

describe('App', () => {
  it('should start the server', async () => {
    const response = await request(app.server).get('/');
    expect(response.status).toBe(200);
  });
});