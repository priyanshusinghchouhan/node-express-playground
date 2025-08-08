require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const verifyToken = require("./verifyToken");

const app = express();
app.use(express.json());


//jwt secret
const JWT_SECRET = process.env.JWT_SECRET;

const loginSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
})


//Routes
app.post("/login", (req, res) =>{
    const {username, password} = req.body;

    const login = loginSchema.safeParse({username, password});

    if(!login.success){
        return res.status(400).json({
            success: false,
            message: "Invalid Input",
            error: login.error.issues
        })
    }

    //if valid: then create token 
    const token = jwt.sign({username}, JWT_SECRET, {expiresIn: "1h"});

    res.status(200).json({
        success: true,
        message: "Login successfull",
        token
    })
})



app.get("/login/dashboard", verifyToken, (req, res) =>{
    res.json({
        message: "Welcome to dashboard",
        data: req.user
    })
})


app.listen(3000, ()=>{
    console.log("Listening at port: 3000");
})