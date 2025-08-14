require("dotenv").config();
const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res, next) =>{
    try{
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(400).json({
                message: "Something wrong with authorization"
            })
        }

        const token = authHeader.split(" ")[1];

        const decode = jwt.verify(token, process.env.JWT_ADMIN_PASSWORD);

        if(decode){
            req.userId = decode.id;
            next();
        }else{
            res.status(403).send({
                message: "Sign In Failed"
            })
        }
    }catch(err){
        res.status(401).json({
            message: "Admin verification failed"
        })
    }

};


module.exports = adminMiddleware;