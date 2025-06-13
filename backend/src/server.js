import expres from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js";



dotenv.config();
const app = expres();
const PORT = process.env.PORT;


app.use(expres.json());

app.use("/api/auth", authRoutes);





app.listen(PORT, () => {
  console.log(`Server running at port ->${PORT}`);
  connectDB();

});











