import dotenv from "dotenv";
import connectToDatabase from "./config/configDb.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectToDatabase()
    .then(() => {
      console.log("✅ Connected to the database");
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    })
    .catch((error) => {
      console.error("❌ Database connection failed:", error);
    });
});
