const express=require('express')
const router=express.Router()
const userControls=require('../controllers/userControl')

router.get('/',userControls.home)
router.get('/login',userControls.login)
router.post('/loginWithGoogle',(req,res)=>{
    console.log(req.body);
    res.json({status:"ok"})
})

module.exports=router;