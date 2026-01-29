const express = require("express");
const { getHeader } = require("../controllers/header.controller");

const router = express.Router();

router.get("/", getHeader);

module.exports = router;