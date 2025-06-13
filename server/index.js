import express from "express";
import connectToDatabase from "./config/configDb.js";

const app = express();

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
