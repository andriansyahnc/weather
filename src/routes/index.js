const otherRoutes = require("./other");
const weatherRoutes = require("./weather");

const routes = (app) => {
  app.use(otherRoutes);
  app.use('/weather', weatherRoutes);
};

module.exports = routes;
