const request = require('supertest');
const app = require('../../app');
const countries = require("../../../tests/mock/countries.data");

jest.mock('../../services/country/findCountriesByName');

describe('Country', () => {
  it('should call the weather - country service and return 200', async () => {
    const response = await request(app.server).get('/country/find')
      .query({
        name: "London"
      });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ data: countries, status: "OK"})
  });
});