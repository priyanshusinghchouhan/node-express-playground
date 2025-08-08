require("dotenv").config();
const jwt = require("jsonwebtoken");

const user = {
    id: 1,
    username: "pedri",
    role: "footballer"
};

const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: "1h"});

console.log("Token: ", token);

try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Playload: ", decoded);
}catch(err){
    console.log("Invalid Token", err.message);
}






// Just a diiferent way to create jwt token
// function signJwt (username, password){
//     const login = loginSchema.safeParse({username, password})

//     if(!login.success){
//         console.log("Invalid credentials")
//         console.log(login.error.issues);
//         return null;
//     }

//     console.log(username);
//     console.log(password);

//     const createJWTtoken = jwt.sign({username}, process.env.JWT_SECRET);

//     console.log("Here is your JWT token: ", createJWTtoken);


//   try{
//     const verify = jwt.verify(createJWTtoken, process.env.JWT_SECRET);
//     console.log("Payload", verify);
//   }catch(err){
//     console.log("Invalid Token", err.message);
//   }

// }

//signJwt("pedri@gmail.com", "123497");



