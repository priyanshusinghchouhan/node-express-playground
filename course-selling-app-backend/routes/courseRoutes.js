require("dotenv").config();
const express = require("express");
const { adminModel, userModel, courseModel, purchaseModel } = require("../models/schema");
const userMiddleware = require("../Middlewares/userMiddleware");

const courseRouter = express.Router();

courseRouter.post("/purchase",userMiddleware, async(req, res) =>{
    try{
        const userId = req.userId;
        const { courseId } = req.body;

        //Fetch user details using userId like name, email etc.
        const user = await userModel.findById(userId);

        if(!user){
            return res.status(404).json({ message: "User not found" });
        }

        const existingPurchase = await purchaseModel.findOne({ userId, courseId });

        if (existingPurchase) {
            return res.status(400).json({
                message: "You already purchased this course."
            });
        }

        const purchasedCourse = await purchaseModel.create({
            userId,
            courseId
        })

        //Fetch course details using courseId like title, desc.
        const purchase = await courseModel.findById(courseId)


        res.json({
            message: `Course ${purchase.title} bought successfully`,
            user: {
                name: user.firstname,
                email: user.email
            },
            data: purchasedCourse
        })
    }catch(err){
        res.status(400).send({
            message: "Couldn't buy Courses",
            err
        })
    }
});


courseRouter.get("/preview", async(req , res) =>{
    try{
        const course = await courseModel.find({});

        res.json({
            message: "Courses found",
            data: course
        })
    }catch(err){
        res.status(400).send({
            message: "Course cannot be viewed",
            err
        })
    }
});


module.exports = courseRouter;