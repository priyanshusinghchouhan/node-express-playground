require("dotenv").config();
const express = require("express");

const app = express();
const router = require("./routes/auth");

app.use(express.json());

app.use("/login", router);


app.listen(3000, () =>{
    console.log("Listening at port => 3000")
});