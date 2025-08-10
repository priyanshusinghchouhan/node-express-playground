const express = require("express");
const app = express();

const router = require("./routes/userRoutes");


app.use(express.json());

app.use("/users", router);


app.get("/", (req, res) =>{
    res.send("hello from home route");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
