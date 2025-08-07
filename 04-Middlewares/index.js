const express = require("express");
const logger = require("./customMiddlewares/logger");
const isOldEnough = require("./customMiddlewares/auth");
const requestCount = require("./customMiddlewares/requestCount");
const rateLimit = require("./customMiddlewares/ratelimiter");


const app = express();


const PORT = 3000;

app.use(express.json());



app.get("/user", logger, (req, res) => {
    res.json({
        message: "Hello from GET users"
    })
});

app.post("/user",logger, (req, res) => {
    res.json({
        message: "Hello from POST users"
    })
});


app.get("/users/:age",requestCount, isOldEnough,   (req, res)=>{
    res.json({
        message: "You can drive motorcycle",
        data: req.count
    })
    
});


app.get("/any", rateLimit, (req, res) =>{
    res.json({
        message: "Hola Welcome!!!!"
    })
})


app.listen(PORT, () => {
    console.log(`Listing at port ${PORT}`);
});