const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("hi")
})
app.get("/about",(req,res)=>{
    res.send(" about hi")
})
app.get("/search",(req,res)=>{
    res.send("hi search")
})
app.get("/:username",(req,res)=>{
    // res.send(req.params)
    let httmlstr=`welcome backend@ ${username}`
    res.send(httmlstr)

})
// app.get("*",(req,res)=>{
//     res.send("not aviable")
// })
app.get("/search/contact",(req,res)=>{
    res.send("contact")
})
app.listen(5000,()=>{
    console.log("started")
})