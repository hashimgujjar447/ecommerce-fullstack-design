import mongoose from "mongoose";

async function connectToDatabase() {
  
  await mongoose.connect(
    `mongodb+srv://hashimgujjarge447:${process.env.password}@cluster0.ry7yplq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  );
}

export default connectToDatabase;
