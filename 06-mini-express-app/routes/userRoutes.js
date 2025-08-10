const express = require("express");
const isLoggedIn = require("../middlewares/isloggedIn")
const router = express.Router();


router.get("/profile",isLoggedIn, (req, res) => {
     res.json({
            message: "Welcome to your profile"
        })
});

module.exports = router;
