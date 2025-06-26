import express from "express";

import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import cors from "cors";
import path from "path";
dotenv.config();
import passport from "./passport.js";


const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();
app.get("/", (req, res) => {
  res.send("Hello bhai Backend ");
});

app.use(
  cors({
    //chanegchange
    origin: ["http://localhost:5173", "https://chat-si-sigma.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

// app.use("/api/auth", authRoutes);
// if (process.env.NODE_ENV === "production") {
//   app.use(expres.static(path.join(__dirname, "../frontend/dist")));
//   app.get("*",(req,res) => {
//     res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))

//   }
//   )
// }
app.listen(PORT, () => {
  console.log(`Server running at port ->${PORT}`);
  connectDB();
});
