import mongoose from "mongoose";

const url: string = process.env.MONGO_URI as string;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing.
 * Call this function at the start of API routes and data fetches.
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  if (!connection) {
    connection = await mongoose.connect(url);
    console.log("Database connected successfully");
  }
  return connection;
};

export default connectDB;
