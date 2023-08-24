const express = require("express");
const {getCurrentWeather} = require("../controllers/weather");

const router = express.Router();
router.post("/", getCurrentWeather);

module.exports = router;