const express = require('express');
const compression = require('compression');
const http = require('http');
const routes = require("./routes");

const app = express();

app.use(compression());
app.disable("x-powered-by");

app.use(express.json());
app.server = http.createServer(app);

routes(app);

module.exports = app;