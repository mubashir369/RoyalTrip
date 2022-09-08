const express = require("express");
const router = express.Router();
const userControls = require("../controllers/userControl");

router.post("/api/loginWithGoogle", userControls.loginWithGoogle);
router.post("/api/sign_up", userControls.signUp);
router.get("/api/user_token",userControls.getToken)

module.exports = router;
