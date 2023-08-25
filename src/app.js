const express = require('express');
const compression = require('compression');
const http = require('http');
const routes = require("./routes");
const {join} = require("path");

const app = express();

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use(express.static(join(__dirname, 'public')));

app.use(compression());
app.disable("x-powered-by");

app.use(express.json());
app.server = http.createServer(app);

routes(app);

module.exports = app;