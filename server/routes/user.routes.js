import { Router } from "express";
import registerUser from "../controllers/register.controller.js";
import asyncHandler from "../middleware/asyncHandler.js";
import loginUser from "../controllers/login.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMidleware.js";
const router = Router();

router.post("/register", asyncHandler(registerUser));
router.post("/login", asyncHandler(loginUser));
router.post("/logout", authMiddleware, (req, res) => {
  // Assuming you have a logout logic, like clearing session or token
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Set to true in production
    sameSite: "Strict",
  });
  res.status(200).json({
    message: "User logged out successfully",
  });
});
router.get("/me", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "User authenticated successfully",
    user: req.user, // Assuming user info is attached to req by authMiddleware
  });
});

router.get("/admin/dashboard", authMiddleware, adminMiddleware, (req, res) => {
  res.status(200).json({
    message: "Welcome to the admin dashboard",
    user: req.user, // Assuming user info is attached to req by authMiddleware
  });
});

export default router;
