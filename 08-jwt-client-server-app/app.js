require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require('cors');
const route = require("./routes/dashboard");

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://127.0.0.1:5500' // or wherever your frontend is hosted
}));

app.use("/", route);

app.listen(3000, ()=>{
    console.log("Listening at port: 3000");
})