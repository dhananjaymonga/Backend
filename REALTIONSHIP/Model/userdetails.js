const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Connect to MongoDB
const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/demo");
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Connection Error:", err);
    }
};
connect();

// Define Order Schema
const orderSchema = new Schema({
    item: String,
    price: Number,
});

const Order = mongoose.model("Order", orderSchema);

// Function to Insert Order Details
// const orderDetails = async () => {
//     try {
//         await Order.insertMany([
//             { item: "laptop", price: 50000 },
//             { item: "mobile", price: 20000 },
//             { item: "tv", price: 30000 },
//         ]);
//         console.log("Orders inserted successfully");
//     } catch (err) {
//         console.error("Error inserting orders:", err);
//     }
// };

// Define User Schema
const userSchema = new Schema({
    username: String,
    orders: [{  // <-- FIXED: Store multiple orders
        type: Schema.Types.ObjectId,
        ref: "Order"
    }]
});

// userSchema.pre("findOneAndDelete", async()=> {
// console.log("Pre middleware")
// })
userSchema.post("findOneAndDelete",  async function(coustomer){     
    if(coustomer.orders.length){
        const result = await Order.deleteMany({_id:{$in:coustomer.orders}})
        console.log(result)
    }
console.log("Post middleware")
})

const User = mongoose.model("User", userSchema);

// Function to Insert User Details
// const userDetails = async () => {
//     try {
//         // Ensure orders are inserted first
//         await orderDetails();

//         // Find orders
//         let order1 = await Order.findOne({ item: "laptop" });
//         let order2 = await Order.findOne({ item: "mobile" });

//         if (!order1 || !order2) {
//             console.log("Orders not found!");
//             return;
//         }

//         // Create new user and add order ObjectIds
//         const user = new User({
//             username: "dhananjay",
//             orders: [order1._id, order2._id]  // <-- FIXED
//         });

//         // Save user
//         let result = await user.save();
//         console.log("User saved successfully:", result);
//     } catch (err) {
//         console.error("Error inserting user:", err);
//     }
// };

// // Call function
// userDetails();


// const addCustomer = async () => {
// const newCustomer = new User({
//     username: "dhananjay",
    
// })
// const newOrder = new Order({
//     item: "laptop",
//     price: 50000,
// })
// newCustomer.orders.push(newOrder);
// let result = await newCustomer.save();
// // console.log(result)
// }
// addCustomer().then(() => {console.log("data svaed")}
// ).catch((err) => {console.log(err)})

deleteCustomer = async () => {
    try {
        let result = await User.findByIdAndDelete("67cbf02ba23703a6491099d8" );
        console.log("User deleted successfully:", result);      } catch (err) { console.log(err)}

    }
    deleteCustomer().then(() => { console.log("data deleted") }).catch((err) => { console.log(err) })