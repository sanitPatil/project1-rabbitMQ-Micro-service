import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL!);
    console.log(
      `✅ Database connection successfully. host: ${connection.connection.host}`
    );
  } catch (error) {
    console.log(`❌ Database Connection failed!`);
    process.exit(1);
  }
}
