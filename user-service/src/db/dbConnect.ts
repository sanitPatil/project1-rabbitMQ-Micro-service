import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL!);
    console.log(
      `✅ Database connection successfully. host: ${connection.connection.host}`
    );
  } catch (error) {
    console.log(`❌ Database Connection Failed, ${error}\n server stop.`);
    process.exit(1);
  }
};
