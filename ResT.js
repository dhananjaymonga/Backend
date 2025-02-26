const express=require("express")
const app=express()
const { v4: uuidv4 } = require("uuid");

const path=require("path")
const methodOverride = require("method-override");
port=8080;
app.use(methodOverride("_method"))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
let posts=[
    {
      id: uuidv4(),

      "username": "dhananjay_monga",
      "content": "Frontend Development Journey",
      "skill": ["React.js", "JavaScript", "HTML", "CSS"],
      "age": 21,
      "study": "B.Tech in Computer Engineering",
      "city": "Sirsa"
    },
    {
      id: uuidv4(),

      "username": "akash_dev",
      "content": "Backend Development Guide",
      "skill": ["Node.js", "Express", "MongoDB", "TypeScript"],
      "age": 24,
      "study": "MCA",
      "city": "Delhi"
    },
    {
      id: uuidv4(),

      "username": "priya_uiux",
      "content": "UI/UX Design Tips",
      "skill": ["Figma", "Adobe XD", "CSS", "JavaScript"],
      "age": 22,
      "study": "B.Des in UX Design",
      "city": "Mumbai"
    },
    {
      id: uuidv4(),

      "username": "rohit_ai",
      "content": "Machine Learning Basics",
      "skill": ["Python", "TensorFlow", "Scikit-Learn", "AI"],
      "age": 23,
      "study": "B.Tech in AI & Data Science",
      "city": "Bangalore"
    },
    {
      id: uuidv4(),

      "username": "sneha_webdev",
      "content": "Full-Stack Development Journey",
      "skill": ["React.js", "Node.js", "SQL", "Bootstrap"],
      "age": 25,
      "study": "M.Tech in Computer Science",
      "city": "Hyderabad"
    },
    {       
      id: uuidv4(),

      "username": "aman_cyber",
      "content": "Cybersecurity Fundamentals",
      "skill": ["Ethical Hacking", "Kali Linux", "Networking", "Python"],
      "age": 26,
      "study": "B.Sc in Cybersecurity",
      "city": "Chennai"
    },
    {
      id: uuidv4(),

      "username": "meera_datasci",
      "content": "Data Science Insights",
      "skill": ["Python", "Pandas", "NumPy", "Power BI"],
      "age": 24,
      "study": "M.Sc in Data Science",
      "city": "Pune"
    },
    {
      id: uuidv4(),

      "username": "vivek_devops",
      "content": "DevOps and Cloud Computing",
      "skill": ["AWS", "Docker", "Kubernetes", "CI/CD"],
      "age": 27,
      "study": "B.Tech in IT",
      "city": "Kolkata"
    },
    {
      id: uuidv4(),

      "username": "sara_mobile",
      "content": "Mobile App Development",
      "skill": ["Flutter", "React Native", "Swift", "Kotlin"],
      "age": 22,
      "study": "B.Tech in Software Engineering",
      "city": "Noida"
    },
    {
      id: uuidv4(),

      "username": "yash_game",
      "content": "Game Development with Unity",
      "skill": ["Unity", "C#", "Blender", "Unreal Engine"],
      "age": 23,
      "study": "B.Sc in Game Development",
      "city": "Ahmedabad"
    },
    {
      id: uuidv4(),

      "username": "neha_datastruct",
      "content": "Data Structures and Algorithms",
      "skill": ["C++", "Java", "Competitive Programming", "DSA"],
      "age": 21,
      "study": "B.Tech in Computer Science",
      "city": "Indore"
    },
    {
      id: uuidv4(),

      "username": "arjun_ai",
      "content": "Artificial Intelligence & NLP",
      "skill": ["Deep Learning", "NLP", "Python", "PyTorch"],
      "age": 25,
      "study": "Ph.D. in AI",
      "city": "Jaipur"
    },
    {
      id: uuidv4(),

      "username": "riya_cloud",
      "content": "Cloud Computing and Security",
      "skill": ["AWS", "Azure", "Google Cloud", "DevSecOps"],
      "age": 24,
      "study": "B.Tech in Information Security",
      "city": "Lucknow"
    }
  ]
  
app.get("/posts",(req,res)=>{
    res.render("apidata.ejs",{posts})
    // res.send("started server")
})
app.get("/posts/new",(req,res)=>{
    res.render("apiform.ejs",{posts})
    // res.send("started server")
})

app.get("/posts/:username",(req,res)=>{
   const {username} =req.params
  const serchpost=posts.find((val)=>username==val.username)
if(!serchpost){
    res.send("not user found")
}
else{
    console.log("User Found:", serchpost); // Debugging

   res.render("Serchuser.ejs",{serchpost})
}})
app.post("/register",(req,res)=>{
    const data=req.body
    const { username, content, skill, age, study, city } = req.body;
    const skillArray = skill ? skill.split(",").map(skill => skill.trim()) : [];

posts.push({
  id:uuidv4(),
    username,
    content,
    skill:skillArray,
    age:parseInt(age),
    study,
    city
})
res.redirect("/posts")
    console.log(data)
})
app.patch("/posts/:id",(req,res)=>{
  const {id}=req.params
  let newcity=req.body.city;
  // console.log(newcity)
const  updated=posts.find(val=> val.id==id)
updated.city=newcity;
// updated.age=age;
  
})
app.get("/posts/:id/edit", (req, res) => {
  console.log("hi")
  const { id } = req.params; // ✅ Extract id
  console.log("Received ID from URL:", id); // Debugging

  const edit = posts.find((val) => val.id ==id); // ✅ Compare properly
  console.log("Post Found:", edit); // Debugging

  // if (!edit) {
  //     return res.send("Post not found!"); 
  // }

  res.render("edit.ejs", { edit }); // ✅ Render edit page
});



app.listen(port,()=>{
    console.log("started",port)
})
