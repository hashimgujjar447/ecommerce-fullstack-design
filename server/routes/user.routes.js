import { Router } from "express";
import registerUser from "../controllers/register.controller.js";
import asyncHandler from "../middleware/asyncHandler.js";
import loginUser from "../controllers/login.controller.js";
const router = Router();

router.post("/register", asyncHandler(registerUser));
router.post("/login", asyncHandler(loginUser));

export default router;
