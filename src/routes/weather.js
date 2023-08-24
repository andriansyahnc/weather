const express = require("express");

const router = express.Router();
router.get("/", (_, res) => res.status(200).send({ status: "OK" }));

module.exports = router;