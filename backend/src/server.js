import expres from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.route.js"

dotenv.config();
const app = expres();
const PORT = process.env.PORT;


app.use(expres.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);


app.listen(PORT, () => {
  console.log(`Server running at port ->${PORT}`);
  connectDB();

});











