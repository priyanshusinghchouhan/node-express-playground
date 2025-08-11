require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

const app = express();

//jwt secret key
const JWT_SECRET = process.env.JWT_SECRET;

app.use(express.json());


//zod schema
const isLoginSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
})


router.post("/", (req, res)=> {
    const {username, password} = req.body;

    const login = isLoginSchema.safeParse({username, password});

    if(!login.success){
        return res.status(400).json({
            success: false,
            message: "Invalid credentials"
        })
    }

    //create the jwt token
    const token = jwt.sign({username}, JWT_SECRET, {expiresIn: "1d"});

    res.status(200).json({
        success: true,
        message: "✅✅Login Successful",
        token
    })
});


router.get("/dashboard", verifyToken, (req, res)=>{
    res.json({
        message: "🎆WELCOME TO DASHBOARD🎆",
        data: req.user
    })
});


module.exports = router;