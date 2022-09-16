const express = require("express");
const adminControl = require("../controllers/adminControl");
const router = express.Router();

router.post("/", adminControl.adminLogin);
module.exports = router;
