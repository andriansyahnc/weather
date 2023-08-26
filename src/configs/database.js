import * as fs from "fs";

const config = require('config');
const databaseConfig = {
  development: {
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.database,
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      underscored: true,
      bigNumberStrings: true
    }
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      underscored: true,
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true,
      underscored: true,
      ssl: {
        ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt')
      }
    }
  }
}

export default databaseConfig;