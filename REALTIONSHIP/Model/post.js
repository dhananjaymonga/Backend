const mongoose= require("mongoose");
const Schema= mongoose.Schema;
 try{
    mongoose.connect("mongodb://localhost:27017/demos");
    console.log("Connected to MongoDB");
 } catch(err){
    console.log(err)
 }
   const userSchema= new Schema({
     username:String,
     email:String,
   })
   const postSchema= new Schema({
content :String,
Like:Number,
     body:String,
     user:{
       type:Schema.Types.ObjectId,
       ref:"User"
     }
   })
   const User= mongoose.model("User",userSchema);
   const Post= mongoose.model("Post",postSchema);

   const addData= async()=>{
   //   const user1= new User({
   //     username:"dhananjay",
   //     email:"dhananjaymonga@gmail.com",
   //    })
   //    const post1= new Post({
   //      content:"this is post",
   //      Like:10,
   //      user:user1._id
   //    })
   //    const post2= new Post({
   //      content:"by by",
   //      Like:10,
   //      user:user1._id
   //    })
   //    await user1.save();
   //    await post1.save();
   //    await post2.save();
   //    console.log("data added")
  //  const result =await Post.find().populate("user");
  //  console.log(result)
  //  }
  //  addData().then(()=>{
  //    console.log("data added")
  //  }).catch((err)=>{
  //    console.log(err)
   }

   




         