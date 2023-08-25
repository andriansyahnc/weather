const express = require("express");

const router = express.Router();
router.get("/", (_, res) => {
  res.render('home.pug');
});

module.exports = router;