module.exports ={
    home:(req,res)=>{
        res.send("hhhhh")
    },
    login:(req,res)=>{
        res.send("login")
    },
    loginWithGoogle:(req,res)=>{
        console.log("ffff");
        console.log(req.body);
        res.json({status:"ok"})
    }

}