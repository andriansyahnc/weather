const otherRoutes = require("./other");

const routes = (app) => {
  app.use(otherRoutes);
};

module.exports = routes;
