import mongoose from "mongoose";

const { DB_URL } = process.env;
export const connectDB = async () => {
  try {
    if (!DB_URL) throw new Error("DB_URL is not defined");

    const conn = await mongoose.connect(DB_URL);
    console.log(`✅ Connected to MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error connecting to MongoDB: ${error}`);
    process.exit(1); // 0 means success, 1 means failure
  }
};
