const express=require("express")
const app=express()
const userModel=require("./models/user")
const bcrypt=require("bcrypt");
const jwt =require("jsonwebtoken")

const path=require("path");
const { hash } = require("crypto");
const cookieParser = require("cookie-parser");

const port=4000
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get(("/sen"),(req,res)=>{
    res.render("index.ejs")
})
app.post("/submit", (req,res)=>{   
    const {name,email,password,age}=req.body
  bcrypt.genSalt(10,(err,salt)=>{
     bcrypt.hash(password, salt,async(err,hash)=>{ ;
        // console.log(salt)
        let createUser= await userModel({
            name,
            email,
            password:hash,
            age
        })
const token=jwt.sign({email},"dhnjgss")
        res.cookie("token",token)

        res.send(createUser)})

  })
    })
    app.get("/login",(req,res)=>{
        res.render("ogin.ejs")

    })
    app.post("/usercheck", async (req,res)=>{
        const {email ,password}=req.body
        const user = await  userModel.findOne({email})
        console.log(password)
       const newpassword= bcrypt.compare(password,user.password)
       console.log(newpassword)
       res.send("hii")


    })
    app.get("/logot", (req,res)=>{
        res.cookie("token","")
        res.redirect("/sen")
        
    })


app.get("/check-cookie", (req, res) => {
    console.log(req.cookies);  // 👈 Check if token is set
    res.send(req.cookies);
}); 



app.listen(5000,()=>{

})
