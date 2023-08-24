const dotenv = require('dotenv');

dotenv.config();

const app = require("./app");
const logger = require("./utils/logger");

app.server.listen(process.env.PORT || 3050, () => {
  logger.info(`Started on port ${app.server.address().port}`);
});
