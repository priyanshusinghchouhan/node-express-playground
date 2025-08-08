
require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const zod= require("zod");

const JWT_SECRET = process.env.JWT_SECRET;

const jwtMiddleware = (req, res, next) => {
    const author = req.headers.authorization;

    console.log("hii from verify.js");
     if(!author || !author.startsWith("Bearer ")){
        return res.status(401).json({message: "Missing or malformed token"})
    }

    console.log("hii after from verify.js");
    const token = author.split(" ")[1];
    console.log("Here is you jwt token", token);

    try{
        const verifiedjwt = jwt.verify(token, JWT_SECRET);
        console.log("PAYLOAD", verifiedjwt);
        req.user = verifiedjwt; //req.user → authenticated user data from JWT
        next();
    }catch(err){
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }

}

module.exports = jwtMiddleware;