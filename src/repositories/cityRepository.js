const Models = require('../models');

const cityRepository = {
  findOne({ lat, lon }) {
    return Models.city.findOne({
      where: { lat, lon },
    })
  },
  create({ lat, lon, city, state, country }) {
    return Models.city.create({
      city,
      state,
      country,
      lat,
      lon,
    }, { logging: console.log })
  }
}

module.exports = cityRepository;