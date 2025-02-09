const mongoose= require("mongoose")
const mongo = async ()=>{
  await  mongoose.connect('mongodb://127.0.0.1:27017/test');
console.log("connected mongodb")
}
mongo().then((res)=>console.log(res,"connected"))
.catch(err=>console.log(err))
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number
})
const UserModel=mongoose.model("user",userSchema)
const coustomerModel=mongoose.model("coustomer",userSchema)
// const NewUser=new UserModel({
//   name:"dhananjay",
//   email:"dhananjay.monga,10@gmail.com",
// password:"gvhskds",
// age:21
// })
// NewUser.save()
// const NewUser1= new coustomerModel({
// name:"harsh",
// email:"imverma0122@gmail.com",
// password:"dhbjns",
// age:24
// })
// NewUser1.save().then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log(err)})
coustomerModel.insertOne({
  name:"dhananjay",
  email:"dhananjaymonga10@gmail.com",
  password:"dhbsjan",
  age:21
}
).then((res)=> console.log(res)
)