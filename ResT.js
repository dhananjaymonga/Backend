const express=require("express")
const app=express()
const path=require("path")
port=8080;
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
let posts=[
    {
      "username": "dhananjay_monga",
      "content": "Frontend Development Journey",
      "skill": ["React.js", "JavaScript", "HTML", "CSS"],
      "age": 21,
      "study": "B.Tech in Computer Engineering",
      "city": "Sirsa"
    },
    {
      "username": "akash_dev",
      "content": "Backend Development Guide",
      "skill": ["Node.js", "Express", "MongoDB", "TypeScript"],
      "age": 24,
      "study": "MCA",
      "city": "Delhi"
    },
    {
      "username": "priya_uiux",
      "content": "UI/UX Design Tips",
      "skill": ["Figma", "Adobe XD", "CSS", "JavaScript"],
      "age": 22,
      "study": "B.Des in UX Design",
      "city": "Mumbai"
    },
    {
      "username": "rohit_ai",
      "content": "Machine Learning Basics",
      "skill": ["Python", "TensorFlow", "Scikit-Learn", "AI"],
      "age": 23,
      "study": "B.Tech in AI & Data Science",
      "city": "Bangalore"
    },
    {
      "username": "sneha_webdev",
      "content": "Full-Stack Development Journey",
      "skill": ["React.js", "Node.js", "SQL", "Bootstrap"],
      "age": 25,
      "study": "M.Tech in Computer Science",
      "city": "Hyderabad"
    },
    {
      "username": "aman_cyber",
      "content": "Cybersecurity Fundamentals",
      "skill": ["Ethical Hacking", "Kali Linux", "Networking", "Python"],
      "age": 26,
      "study": "B.Sc in Cybersecurity",
      "city": "Chennai"
    },
    {
      "username": "meera_datasci",
      "content": "Data Science Insights",
      "skill": ["Python", "Pandas", "NumPy", "Power BI"],
      "age": 24,
      "study": "M.Sc in Data Science",
      "city": "Pune"
    },
    {
      "username": "vivek_devops",
      "content": "DevOps and Cloud Computing",
      "skill": ["AWS", "Docker", "Kubernetes", "CI/CD"],
      "age": 27,
      "study": "B.Tech in IT",
      "city": "Kolkata"
    },
    {
      "username": "sara_mobile",
      "content": "Mobile App Development",
      "skill": ["Flutter", "React Native", "Swift", "Kotlin"],
      "age": 22,
      "study": "B.Tech in Software Engineering",
      "city": "Noida"
    },
    {
      "username": "yash_game",
      "content": "Game Development with Unity",
      "skill": ["Unity", "C#", "Blender", "Unreal Engine"],
      "age": 23,
      "study": "B.Sc in Game Development",
      "city": "Ahmedabad"
    },
    {
      "username": "neha_datastruct",
      "content": "Data Structures and Algorithms",
      "skill": ["C++", "Java", "Competitive Programming", "DSA"],
      "age": 21,
      "study": "B.Tech in Computer Science",
      "city": "Indore"
    },
    {
      "username": "arjun_ai",
      "content": "Artificial Intelligence & NLP",
      "skill": ["Deep Learning", "NLP", "Python", "PyTorch"],
      "age": 25,
      "study": "Ph.D. in AI",
      "city": "Jaipur"
    },
    {
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
app.listen(port,()=>{
    console.log("started",port)
})
