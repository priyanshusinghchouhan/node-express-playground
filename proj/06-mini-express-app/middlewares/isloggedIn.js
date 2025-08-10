const isLoggedIn = (req, res, next) =>{
    // const isloggedIn = req.query.isAuthor;//in query it should go like this => /users/profile?isAuthor=false

    // console.log(isloggedIn);// either true or false

    // if(isloggedIn === "true"){
    //     next();
    // }else{
    //     res.status(401).json({
    //         message: "Unauthorized"
    //     })
    // }


    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message: "Missing or malformed token"})
    }

    const token = authHeader.split(" ")[1];

    if(token === "12345996"){
        next();
    }else{
         res.status(401).json({ message: "Invalid token" });
    }
}


module.exports = isLoggedIn;