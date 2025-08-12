const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();


router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin@gmail.com" && password === "123456") {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });

    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Protected Dashboard Route
router.get("/dashboard", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: `Welcome back, ${decoded.username}! 🔐`, data: ["📊 Dashboard data", "📈 Stats", "📁 Files"] });
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
});

module.exports = router;
