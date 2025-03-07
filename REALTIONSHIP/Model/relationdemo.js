const mongoose =require('mongoose');
const Schema = mongoose.Schema;
async function connect(){
  await  mongoose.connect('mongodb://localhost:27017/relationship',
    );

}
connect().then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log(err)
})
const userSchema= new Schema({
    username:String,
    addressses:[{
        _id: false,
        location:String,
        city:String,
    }]

})
const User= mongoose.model("User",userSchema);
const newuser= async()=>{
    const user1= new User({
username:"dhananjay",
addressses: [{
    location:"bajekan near  gurdaware sahib  ",
    city:"sirsa"

}]})
user1.addressses.push({location:"near namberdhar",city:"hisar"})
let result=await user1.save();
console.log(result)
}
newuser().then(()=>{
    console.log("saved data")
}).catch((err)=>{
    console.log(err)
})
