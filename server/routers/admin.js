const express = require("express");
const adminControl = require("../controllers/adminControl");
const router = express.Router();

router.post("/", adminControl.adminLogin);
router.post("/addPlace", (req,res)=>{
    console.log("place api called");
    console.log(req.body);
});
module.exports = router;
