'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      city.hasMany(models.forecast)
    }
  }
  city.init({
    name: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.DECIMAL(10, 8),
    lon: DataTypes.DECIMAL(10, 8),
  }, {
    sequelize,
    modelName: 'city',
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ['lat', 'lon'],
      },
    ],
  });
  return city;
};