const {db} = require('../models');

const cityRepository = {
  findOne(data) {
    db.city.findOne({
      where: {
        lat: data.lat,
        lon: data.lon,
      },
    })
  }
}

module.exports = cityRepository;