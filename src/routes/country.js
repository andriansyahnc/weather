const express = require("express");
const {findCountriesByName} = require("../controllers/country");

const router = express.Router();
router.get("/find", findCountriesByName);

module.exports = router;