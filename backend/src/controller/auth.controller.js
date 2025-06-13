import User from "../models/User.js"
import jwt from "jsonwebtoken"

export async function signup(req, res) {
    
    const { email, password, fullName } = req.body;

    try {
        if (!email || !password || !fullName) {
            return res.status(400).json({ message: "All Fields are required !" });

        }
        if (password.length < 6) {
            return res
              .status(400)
              .json({ message: "Password must be at least 6 characters." });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
          return res.status(400).json({ message: "Invalid email format" });
        }


        // check if email alradty eixst
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email Already Exist in database " });
        }

        const idx = Math.floor(Math.random() * 100) + 1;
        const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

        const newUser=await User.create({email,fullName,password,profilePic:randomAvatar})


        // craete user i stream aslso 
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "2d" })
        
        res.cookie("jwt", token, {
            maxAge: 2 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure:process.env.NODE_ENV==="production"
        })

        res.status(201).json({success:true,user:newUser})
    } catch (error) {
        console.log("Error in Signup Controller", error)
        res.status(500).json({message:"Internal Server Error"})
    }
}
export async  function login(req, res) {
  res.send("login rout");
}
export function logout(req, res) {
  res.send("logout rout");
}