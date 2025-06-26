import express from "express";
import passport from "../passport.js";
import jwt from "jsonwebtoken";
import { login, signup, logout, onboard } from "../controller/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import User from "../models/User.js";
import { verifyGoogleToken } from "../utils/googleVerify.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/onboarding", protectRoute, onboard)

// forgot pass
// reset pass 

router.get("/me", protectRoute,(req,res) => {
    res.status(200).json({success:true,user:req.user})
}
);


router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.post("/google/callback", async (req, res) => {
  try {
    const { credential } = req.body;
    // Verify credential using Google API (or jwt decode)
    // Find/create user in DB
    // Create JWT and send as cookie or json

    // Example:
    const ticket = await verifyGoogleToken(credential); // You need to write this util
    const { email, name } = ticket.payload;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email, fullName: name });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, message: "Invalid Google login" });
  }
});
  
export default router;