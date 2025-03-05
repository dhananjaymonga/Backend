const express=require("express")
const app=express()
const ExpressError = require("./views/EXPRESSERROR"); 
console.log(ExpressError)

app.set("view engine", "ejs");
app.use(express.static("public"))

// logger route
// -morgan
app.use((req,res,next)=>{
    // check Date 
    req.time=new Date(Date.now()).toString()
    console.log(req.method,req.hostname,req.path,req.ip,req.time)
    console.log("I am a middleware")
    next()
    
})
app.use((req,res,next)=>{
    console.log("I am a middleware 2")
    next()
    
})
// authentaction layer for routes
app.use("/api",(req,res,next)=>{
    const {token} =req.query
    if(token==="giveacess"){
        next()
    }
    else{
        throw new ExpressError("Unauthorized Access", 401);

        // res.send("Not Allowed")
    }
})
const checktoken=("/api/dhananjay",(req,res,next)=>{
    const {token} =req.query
    if(token==="giveacess"){
        next()
    }
    else{

        // res.send("Not Allowed")
        throw new ExpressError("Unauthorized Access", 401);
        // throw new Error("Notllowed")
    }
})

app.get("/api",(req,res)=>{
    res.send("Welcome to API")

})
app.get("/api/dhananjay",checktoken,(req,res)=>{
    res.send("Welcome to API")
})
app.use("/random",(req,res,next)=>{
    abcd =abcd
    console.log("I  Random middleware")
    next()
    
})
// Error Handling Middlewarre

// app.use((err,req,res,next)=>{
//     console.log("----ERROR----")
//     next(err)
// })
app.use((err,req,res,next)=>{
    console.log("----ERROR2----")
    const {message="Something went wrong",statusCode=500}=err
    res.status(statusCode).send(message)
    // next(err)
    // res.send(err)
})
app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.get("/admin",(req,res)=>{
    throw new ExpressError("Acess to admin is Forbideen", 403);
})


app.use((req,res)=>{
    res.render("indexnotfound.ejs")
    // res.status(404).send("404 Page Not Found")
})
app.listen(5000,()=>{
    
    console.log("Server is running on port 5000")
})