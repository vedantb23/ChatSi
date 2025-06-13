import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDB=async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connceted->${conn.connection.host}`)
    } catch (error) {
        console.log("error in mobngo connectuin->", error);
        process.exit(1);

    }
    
}