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

    // bcrypt
    app.get("/password",(req,res)=>{
        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash("password",salt,function(err,hash){
                console.log(hash)
            })
        })
        // verify password in bcrypt method
        bcrypt.compare("passwod","$2b$10$dkIZdttkP3M5ARYKxIelpusib8WbvPTtqNyFWxfIdAtcpnZyVAHoq",function(err,result){
console.log(result)
        })
    //  let  salt= bcrypt.genSalt()
    //   const newpassword=bcrypt.hash("password",salt)
    //   console.log(newpassword)
        console.log(req.cookies)

        res.send("check cookies")
        })
        // jwt 


        app.get("/jwt",(req,res)=>{
            let token =jwt.sign({email:"dhananjaymonga@gmail.com"},"secret")
console.log(token)
res.cookie("token",token)
res.send("set and done")
        })
        app.get("/read",(req,res)=>{
        let data=jwt.verify(req.cookies.token,"secret")
console.log(data)

        })
app.listen(port,()=>{
    
    console.log("start server")
})