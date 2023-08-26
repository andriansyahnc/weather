const Models = require('../models');
const dayjs = require('dayjs');
const { Op } = require('sequelize');

const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

const forecastRepository = {
  findByCity(cityId) {
    const ts = dayjs.utc().unix();
    return Models.forecast.findOne({
      where: {
        tsStart: {
          [Op.gte]: ts
        },
        tsEnd: {
          [Op.lt]: ts
        },
        cityId
      },
    })
  },
  create3hrForecast({ tsStart, tsEnd, temperature, description, cityId }) {
    return Models.forecast.create({
      tsStart,
      tsEnd,
      temperature,
      description,
      cityId,
    });
  }
}

module.exports = forecastRepository;