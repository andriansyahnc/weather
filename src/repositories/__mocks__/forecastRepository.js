const forecastRepository = {
  findByCity: jest.fn(),
  create3hrForecast: jest.fn(),
};

module.exports = forecastRepository;