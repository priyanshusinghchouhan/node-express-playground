require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected");
    }catch(err){
        console.log("CONNECTION ERROR: ", err);
    }
};

module.exports = connectDB;

