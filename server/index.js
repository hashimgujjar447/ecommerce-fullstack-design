import express from "express";
import connectToDatabase from "./config/configDb.js";
import dotenv from "dotenv";
import productRouter from "./routes/product.routes.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import cors from "cors";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // your frontend URL
    credentials: true, // required for cookies to be sent
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api", productRouter);
app.use("/api/user", userRouter);

app.listen(3000, () => {
  // Connect to the database
  connectToDatabase()
    .then(() => {
      console.log("Connected to the database successfully");
    })
    .catch((error) => {
      console.error("Error connecting to the database:", error);
    });
  console.log("Server is running on http://localhost:3000");
});
