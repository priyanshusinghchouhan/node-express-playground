const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

const adminSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    firstname: String,
    lastname: String
});

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    firstname: String,
    lastname: String
})

const courseSchema = new mongoose.Schema({
    title: { type: String, unique: true },
    description: String,
    price: Number,
    creatorId: ObjectId
});

const purchaseSchema = new mongoose.Schema({
    userId: ObjectId,
    courseId: ObjectId
});


const adminModel = mongoose.model("admins", adminSchema);
const userModel = mongoose.model("users", userSchema);
const courseModel = mongoose.model("courses", courseSchema);
const purchaseModel = mongoose.model("purchases", purchaseSchema);


module.exports = {
    adminModel,
    userModel,
    courseModel,
    purchaseModel
}