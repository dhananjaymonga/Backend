// const express=require("express")
// const app=express()
// const path =require("path")
// app.set("views",path.join(__dirname,"/views"))
// // app.set("view engine","ejs");
// // app.get("/",(req,res)=>{
// //     res.send("hi")
// // })
// app.get('/favicon.ico', (req, res) => res.status(204)); // 204 No Content, not sending any icon

// app.get("/",(req,res)=>{
// res.render("index.ejs")
// })
// // app.get("/about",(req,res)=>{
// //     res.send(" about hi")
// // })
// // app.get("/search",(req,res)=>{
// //     res.send("hi search")
// // })
// // app.get("/:username",(req,res)=>{
// //     // res.send(req.params)
// //     console.log(req.query)
// //     let {username}=req.params
// //     let {q}=req.query
// //     console.log(q,username)
// //     if(!q){
// //         res.send("not streing")
// //         // res.send("<h1>nott</h1>")
// //     }
// //     let httmlstr=`welcome backend@ ${username},${q}`
// //     res.send(httmlstr)

// // })
// // app.get("*",(req,res)=>{
// //     res.send("not aviable")
// // })
// app.get("/search/contact",(req,res)=>{
//     res.send("contact")
// })

// app.get("/:username", (req, res) => {
//     let username = req.params.username; // Corrected: req.params.username
//     console.log(username); // Debugging ke liye
//     res.render("instagram", { username: username });
// });
// app.listen(5000,()=>{
//     console.log("started")
// })
const express = require("express");
const app = express();
const path = require("path"); // Path module import karein

// View Engine Setup
// app.use(express.static("public"))
app.use(express.static(path.join(__dirname,"public")))
// app.use(express.static(path.join(__dirname,"public/css")))
// app.use(express.static(path.join(__dirname,"public/js")))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Ensure correct views folder path
app.get("/routes",(req,res)=>{
    let value=Math.floor(Math.random()*6)+1
    res.render("routes.ejs",{value})
})
app.get("/:username", (req, res) => {
    let username = req.params.username;
    let arr=["Harsh","Rahul","Ankur","Harnoor","Kuki"]
    // console.log(username)
    const instData=require("./data.json")
  const  data=instData[username]
  
console.log(data)

    // console.log(data)
    // console.log(username);
if(data){

    res.render("instagram", { username,arr,data}); // Correct usage
}
else{
    res.render("Notaviableuser.ejs")
}

});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
