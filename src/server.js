const configs = require("./configs/config");
const app = require("./app");
const logger = require("./utils/logger");

app.server.listen(configs.serverPort, () => {
  logger.info(`Started on port ${configs.serverPort}`);
});
