const express = require("express");
const app = express();
const userRouter = require("./routers/user");
require("dotenv").config({path:"../config.env"});
const cors=require('cors')
const passport=require('passport')
const cookieSession=require('cookie-session');
const passportSetup=require('./auth/passport')
const port = process.env.PORT||8080;
app.use(
    cookieSession({
        name:"session",
        keys:["key123"],
        maxAge:24*60*60*100
    })
)
app.use(express.json())
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())
app.use("/", userRouter);

app.listen(port, () => {
  console.log(`server start on port ${port}`);
});
