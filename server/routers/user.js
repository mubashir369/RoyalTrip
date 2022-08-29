const express=require('express')
const router=express.Router()
const userControls=require('../controllers/userControl')

router.get('/',userControls.home)
router.get('/login',userControls.login)

module.exports=router;