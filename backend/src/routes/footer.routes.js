const express = require("express");
const { getFooter } = require("../controllers/footer.controller");

const router = express.Router();

router.get("/", getFooter);

module.exports = router;