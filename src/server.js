const configs = require("./configs/config");
const app = require("./app");
const logger = require("./utils/logger");

app.server.listen(configs.port, () => {
  logger.info(`Started on port ${app.server.address().port}`);
});
