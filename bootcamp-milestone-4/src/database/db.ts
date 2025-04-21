import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("❌ MONGODB_URI is not defined in env");
  }

  if (isConnected) return;

  try {
    await mongoose.connect(uri, {
      dbName: "test", // or your real DB name
    });
    isConnected = true;
    console.log("✅ MongoDB connected");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("❌ MongoDB connection error:", err.message);
    throw err;
  }
};

export default connectDB;
