require("dotenv").config();
const express = require("express");
const { adminModel, courseModel, userModel } = require("../models/schema");
const adminMiddleware = require("../Middlewares/adminMiddleware")
const jwt = require("jsonwebtoken");

const adminRouter = express.Router();


adminRouter.post("/signup", async(req, res) =>{
    try{
        const {email, password, firstname, lastname} = req.body;

        const admin = await adminModel.create({
            email,
            password,
            firstname,
            lastname
        });


        res.send({
            message: "Admin created successfully",
            data: admin
        })

    }catch(err){
        res.status(400).send({
            message: "Admin creation failed",
            err
        })
    }
});


adminRouter.post("/signin", async(req, res) =>{
    try{
        //console.log("hii")
        const { email , password } = req.body;
        const admin = await adminModel.findOne({
            email,
            password
        });

        //console.log("bye")
        if(!admin){
            return res.status(401).json({ message: "Admin not found" });
        }
        if(admin.password !== password){
            return res.status(401).json({ message: "Invalid Password" });
        }

        //console.log("byeeeeeee")
        const token = jwt.sign({id: admin._id}, process.env.JWT_ADMIN_PASSWORD, {expiresIn: "1d"});

        //console.log("byyyyye")

        res.send({
            message: "Admin logged in successfully",
            data: token
        })
        

    }catch(err){
        res.status(400).send({
            message: "Admin LogIn failed",
            err
        })
    }
});


adminRouter.post("/course",adminMiddleware, async(req, res)=> {
    try{
        const adminId = req.userId;
        const { title, description, price} = req.body;
        const course = await courseModel.findOne({title});

        if(course){
            return res.status(401).json({ message: "Course has been already created" });
        }

        const newCourse = await courseModel.create({
            title,
            description,
            price,
            creatorId: adminId
        });

        res.send({
            message: "Course created successfully",
            data: newCourse
        })

    }catch(err){
         res.status(400).send({
            message: "Course creation failed",
            err
        })
    }
});


adminRouter.put("/course",adminMiddleware, async(req, res) =>{
    try{
        const adminId = req.userId;
        const { title, description, price, courseId} = req.body;

        const updateCourse = await courseModel.updateOne({
            _id: courseId,
            creatorId: adminId
        },{
            title,
            description,
            price
        });

        res.send({
            message: "Course updated successfully",
            data: updateCourse
        })

    }catch(err){
        res.status(400).send({
            message: "Course updation failed",
            err
        })
    }
});



adminRouter.get("/course/bulk",adminMiddleware, async(req, res) =>{
    try{
        const { email, password } = req.body;

        const admin = await adminModel.findOne({email});

        if(!admin){
            return res.status(401).send({message: "No Admin Found with such email"})
        }

        if(admin.password !== password){
            return res.status(401).send({message: "Invalid Credentials"})
        }

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


// Only Admin can Delete himself/herself, other admins and users
adminRouter.delete("/deleteuser",adminMiddleware, async(req, res) =>{
    try{

        const user = await userModel.findOne({email: req.body.email});

        if(!user){
            return res.status(401).json({ message: "No User exists with such email" });
        }

        const { email } = req.body;

        const deleteuser = await userModel.deleteOne({email});

        res.send({
            message: " User deleted successfully ",
            data: deleteuser
        })
    }catch(err){
        res.status(400).send({
            message: "User Deletion failed",
            err
        })
    }
});


//Deleting admin
adminRouter.delete("/deleteadmin",adminMiddleware, async(req, res) =>{
    try{

        const admin = await adminModel.findOne({email: req.body.email});

        if(!admin){
            return res.status(401).json({ message: "No Admin exists with such email" });
        }

        const { email } = req.body;

        const deleteadmin = await adminModel.deleteOne({email});

        res.send({
            message: " Admin deleted successfully ",
            data: deleteadmin
        })
    }catch(err){
        res.status(400).send({
            message: "Admin Deletion failed",
            err
        })
    }
});


adminRouter.delete("/course/deletecourse",adminMiddleware, async(req, res) =>{
    try{
        const { email, password, _id} = req.body;
        const admin = await adminModel.findOne({email});

        if(!admin){
            return res.status(401).send({message: "No Admin Found with such email"})
        }

        if(admin.password !== password){
            return res.status(401).send({message: "Invalid Credentials"})
        }

        const courseId = _id;
        const course = await courseModel.deleteOne({
            _id: courseId
        })


        res.json({
            message: "Course deleted successfully",
            course
        })

    }catch(err){
        res.status(400).send({
            message: "Course Deletion failed",
            err
        })
    }
});

module.exports = adminRouter;