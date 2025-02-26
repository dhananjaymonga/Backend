const express=require("express")
const app=express()
const bcrypt=require("bcrypt")

port=4000;
const cookieparser=require("cookie-parser")
app.use(cookieparser())

app.get("/st",(req,res)=>{
res.cookie("name","harsh")
res.send("done set cookie")
})
app.get("/check",(req,res)=>{
    console.log(req.cookies)
    res.send("check cookies")
    })

    // bcrypt
    app.get("/password",(req,res)=>{
        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash("password",salt,function(err,hash){
                console.log(hash)
            })
        })
    //  let  salt= bcrypt.genSalt()
    //   const newpassword=bcrypt.hash("password",salt)
    //   console.log(newpassword)
        console.log(req.cookies)

        res.send("check cookies")
        })
app.listen(port,()=>{
    
    console.log("start server")
})