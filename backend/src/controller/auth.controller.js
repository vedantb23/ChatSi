import User from "../models/User.js"
import jwt from "jsonwebtoken"
import {upsertStreamUser} from "../lib/stream.js"
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
        try {
            await upsertStreamUser({
              id: newUser._id.toString(),
              name: newUser.fullName,
              image: newUser.profilePic || "",
            });
            console.log("stream user created")
        } catch (error) {
            console.log("error in creating stream user");
        }

        
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
  try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "All Fields are required !" });
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or Password !" });
      }

      const isPasswordCorrect = await user.matchPassword(password);
      if (!isPasswordCorrect) {
        return res.status(401).json({ message: "Invalid email or Password !" });
      }


      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "2d",
      });

      res.cookie("jwt", token, {
        maxAge: 2 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      });
      res.status(200).json({ sucess: true, user });

  } catch (error) {
    console.log("Error in login Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export function logout(req, res) {
    res.clearCookie("jwt");
    res.status(200).json({sucess:true, message: "Logout Sucessfull !" });
}


export async function onboard(req,res) {
    // console.log(req.user)
    try {
        const userId = req.user._id;
        const { fullName, bio, nativeLanguage, learningLanguage, location } = req.body;
        if (!fullName || !bio || !nativeLanguage || !learningLanguage || !location) {
            return res.status(400).json({
              message: "All Fields are required",
              missingFields: [!fullName && "fullName", !bio && "bio",!nativeLanguage && "nativeLanguage",!learningLanguage && "learningLanguage",!location && "location"].filter(Boolean)
            });
        }

        const updatedUser = await User.findByIdAndUpdate(userId, {
            ...req.body, isOnboarded:true,
        }, { new: true })
        
        if (!updatedUser) {
            return res.status(404).json({message:"User not found"})

        }
        //todo update user in stream->fized 
        try {
          await upsertStreamUser({
            id: updatedUser._id.toString(),
            name: updatedUser.fullName,
            image: updatedUser.profilePic || "",
          });
          console.log("stream user updated");
        } catch (error) {
          console.log("error in updateing  stream user",error.message);
        }


        return res.status(200).json({success:true, user:updatedUser});
    } catch (error) {
        console.log("onbaord error",error)
        return res.status(500).json({ message: "server issue" });
    }
}