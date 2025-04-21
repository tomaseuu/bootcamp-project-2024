import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || process.env.MONGO_URI;

  if (!uri) {
    throw new Error("❌ MONGODB_URI is not defined in environment variables");
  }

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(uri, {
      dbName: "test", // ✅ replace with your actual DB name if needed
    });
    isConnected = true;
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", (error as Error).message);
    throw error; // so build fails gracefully if connection breaks
  }
};

export default connectDB;
