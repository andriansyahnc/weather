'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class forecast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      forecast.belongsTo(models.city)
    }
  }
  forecast.init({
    temperature: DataTypes.STRING,
    description: DataTypes.STRING,
    icon: DataTypes.STRING,
    cityId: DataTypes.INTEGER,
    tsStart: DataTypes.INTEGER,
    tsEnd: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'forecast',
    underscored: true,
  });
  return forecast;
};