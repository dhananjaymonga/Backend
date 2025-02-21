const express=require("express")
const app=express()
port=8080;
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.get("/register",(req,res)=>{
//    const {username,email} =req.query
//     res.send(`data recived,${email}`)
//     res.send("Hii ")
// })
app.post("/register",(req,res)=>{
    console.log(req.body)
    const{username,emails} =req.body
    res.send(`user Data ${username},${emailsjnj}`)
})
app.listen(port,()=>{
    console.log("START SERVER ",port)
})