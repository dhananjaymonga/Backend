const express=require("express")
const app=express()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

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

   
app.listen(port,()=>{
    
    console.log("start server")
})