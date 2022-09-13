const express = require("express");
const router = express.Router();
const userControls = require("../controllers/userControl");

router.post("/api/sign_up", userControls.signUp);
router.post("/api/user_login",userControls.userLogin)

module.exports = router;
