import mongoose from "mongoose";

async function connectToDatabase() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ry7yplq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  );
}

export default connectToDatabase;
