import User from "../models/user.model.js";
import asyncHandler from "../middleware/asyncHandler.js";
import AppError from "../utils/AppError.js";

async function registerUser(req, res) {
  const { fullName, username, email, password } = req.body;
  if (!fullName || !username || !email || !password) {
    throw new AppError("All fields are required", 400);
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    throw new AppError("Invalid email format", 400);
  }

  if (password.length < 6) {
    throw new AppError("Password must be at least 6 characters long", 400);
  }
  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existingUser) {
    throw new AppError("Email or username already exists", 400);
  }

  const newUser = await User.create({
    fullName,
    username,
    email,
    password,
  });

  if (!newUser) {
    throw new AppError("User registration failed", 500);
  }

  const token = await newUser.generateAuthToken();
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Set to true in production
    sameSite: "Strict",
  });

  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
}

export default registerUser;
