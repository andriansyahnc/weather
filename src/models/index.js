'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const databaseConfig = require('../configs/database');
const config = require('../configs/config');
const db = {};

const databaseConfigData = databaseConfig[config.nodeEnv];
const url = `mysql://${databaseConfigData.username}:${databaseConfigData.password}@${databaseConfigData.host}:${databaseConfigData.port}/${databaseConfigData.database}`;
const sequelize = new Sequelize("mysql://root:Nce12345@localhost/weather", config);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
