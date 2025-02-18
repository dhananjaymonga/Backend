const express=require("express")
const app=express()
const path =require("path")
app.set("views",path.join(__dirname,"/views"))
// app.set("view engine","ejs");
// app.get("/",(req,res)=>{
//     res.send("hi")
// })
app.get('/favicon.ico', (req, res) => res.status(204)); // 204 No Content, not sending any icon

app.get("/",(req,res)=>{
res.render("index.ejs")
})
// app.get("/about",(req,res)=>{
//     res.send(" about hi")
// })
// app.get("/search",(req,res)=>{
//     res.send("hi search")
// })
app.get("/:username",(req,res)=>{
    // res.send(req.params)
    console.log(req.query)
    let {username}=req.params
    let {q}=req.query
    console.log(q,username)
    if(!q){
        res.send("not streing")
        // res.send("<h1>nott</h1>")
    }
    let httmlstr=`welcome backend@ ${username},${q}`
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
