import mongoose from "mongoose";
import DB_NAME from "../constants.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`MongoDB Connected on DB Host: ${connectionInstance.connection.host}`);
    } catch (err) {
        console.error("MongoDB Connection Error", err);
        console.log("Could not connect to DB");
        throw err;
        // process.exit(1);
    }
};

export default connectDB