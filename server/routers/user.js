const express = require("express");
const router = express.Router();
const userControls = require("../controllers/userControl");

router.post("/api/loginWithGoogle", userControls.loginWithGoogle);
router.post("/api/signUp", userControls.signUp);

module.exports = router;
