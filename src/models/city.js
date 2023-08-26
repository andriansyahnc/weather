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
      // define association here
    }
  }
  city.init({
    name: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lon: DataTypes.DECIMAL
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