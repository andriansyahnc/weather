const axios = require('axios');
const findCountryService = require('../findCountriesByName');
const countries = require('../../../../tests/mock/countries.data');
const config = require("../../../configs/config");
describe('Find Country Service', () => {
  it('should call axios with several parameter', async () => {
    const axiosSpy = jest.spyOn(axios, 'get');
    axiosSpy.mockResolvedValue(countries);
    const countryName = "London";

    const result = findCountryService(countryName);
    expect(axiosSpy).toHaveBeenCalledWith(`${config.weatherBaseUrl}/geo/1.0/direct`, {
      params: {
        q: countryName,
        limit: 5,
        appid: config.weatherApiKey,
      }
    })
  });
});