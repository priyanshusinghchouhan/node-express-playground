require("dotenv").config();
const express = require("express");
const { userModel, courseModel, purchaseModel } = require("../models/schema");
const userMiddleware = require("../Middlewares/userMiddleware")
const jwt = require("jsonwebtoken");

const userRouter = express.Router();


userRouter.post("/signup", async(req, res) =>{
    try{
        const {email, password, firstname, lastname} = req.body;

        const user = await userModel.create({
            email,
            password,
            firstname,
            lastname
        });


        res.send({
            message: "User created successfully",
            data: user
        })

    }catch(err){
        res.status(400).send({
            message: "User creation failed",
            err
        })
    }
});


userRouter.post("/signin", async(req, res) =>{
    try{
        //console.log("hii")
        const { email , password } = req.body;
        const user = await userModel.findOne({
            email,
            password
        });

        //console.log("bye")
        if(!user){
            return res.status(401).json({ message: "User not found" });
        }
        if(user.password !== password){
            return res.status(401).json({ message: "Invalid Password" });
        }

        //console.log("byeeeeeee")
        const token = jwt.sign({id: user._id}, process.env.JWT_USER_PASSWORD, {expiresIn: "1d"});

        //console.log("byyyyye")
        res.send({
            message: "User logged in successfully",
            data: token
        })
    }catch(err){
        res.status(400).send({
            message: "User LogIn failed",
            err
        })
    }
});


userRouter.get("/purchases",userMiddleware, async(req, res) =>{
    try{
        console.log("hiiiiiii")
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if(!user){
            return res.status(401).send({message: "No user found with such email"})
        }

        if(user.password !== password){
            return res.status(400).send({message: "Invalid Credetials"})
        }

        const userId = req.userId;
        const purchases = await purchaseModel.find({userId});

        let purchasedCourseIds = [];

        for(let i=0; i<purchases.length; i++){
            purchasedCourseIds.push(purchases[i].courseId);
        }

        const courseData = await courseModel.find({
            _id: {$in : purchasedCourseIds}
        })

        res.json({
            message: "Courses found",
            data: courseData
        })
    }catch(err){
        res.status(400).send({
            message: "Couldn't fetch Courses",
            err
        })
    }
})

module.exports = userRouter;