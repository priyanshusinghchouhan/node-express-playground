const express = require("express");
const connectDB = require("../course-selling-app-backend/db");
const adminRouter = require("../course-selling-app-backend/routes/adminRoutes")
const userRouter = require("../course-selling-app-backend/routes/userRoutes");
const courseRouter = require("./routes/courseRoutes");
const app = express();

app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/", courseRouter);


connectDB();

app.listen(3000, () =>{
    console.log("Server listening at PORT: 3000");
})