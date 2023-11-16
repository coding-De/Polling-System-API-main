require('dotenv').config()
const mongoose = require('mongoose');
exports.connectMonggose =()=>{
    mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/polling_api",
    {
        useNewUrlParser: true
    })
    .then((e)=>console.log("Connected to Mongodb =>>Polling API"))
    .catch((e)=>console.log("Not Connect Mongodb"))
}
