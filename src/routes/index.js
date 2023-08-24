const otherRoutes = require("./other");
const weatherRoutes = require("./weather");
const countryRoutes = require("./country");

const routes = (app) => {
  app.use(otherRoutes);
  app.use('/weather', weatherRoutes);
  app.use('/country', countryRoutes);
};

module.exports = routes;
