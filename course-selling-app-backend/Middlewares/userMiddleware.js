require("dotenv").config();
const jwt = require("jsonwebtoken");

const userMiddleware = (req, res, next) =>{
    try{
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(400).json({
                message: "Something wrong with authorization header"
            })
        }

        const token = authHeader.split(" ")[1];

        const decode = jwt.verify(token, process.env.JWT_USER_PASSWORD);

        if(decode){
            req.userId  = decode.id;
            next();
        }else{
            res.status(403).json({
                message: "Sign In failed"
            })
        }
    }catch(err){
        res.status(401).json({
            message: "User verification failed"
        })
    }

};



module.exports = userMiddleware;