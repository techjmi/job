import express from "express";
import { getProfile, login, register, updateProfile } from "../controller/userController.js";
import { authenticateUser } from "../middleware/authMiddle.js";
// import { register, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authenticateUser, getProfile);
router.put("/profile", authenticateUser, updateProfile);
export default router;
