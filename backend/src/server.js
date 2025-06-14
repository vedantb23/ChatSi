import expres from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.route.js"
import chatRoutes from "./routes/chat.route.js"
import cors from "cors"

dotenv.config();
const app = expres();
const PORT = process.env.PORT;

app.get("/",(req,res) => {
  res.send("Hello bhai Backend ")
  
}
)
app.use(cors({
  //chanegchange
  origin: "http://localhost:5173",
  credentials:true
}))
app.use(expres.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log(`Server running at port ->${PORT}`);
  connectDB();

});
