const express = require("express");
const router = express.Router();

const { 
    createUser,
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser,
    patchUser
} = require("../controllers/userController");


const validateUser = require("../middleware/userMiddleware")


router.post("/", validateUser, createUser);
router.get("/", getAllUsers);
router.get("/:userid", getUserById);
router.delete("/:userid", deleteUser);
router.put("/:userid", validateUser, updateUser);
router.patch("/:userid", validateUser, patchUser);

module.exports = router;