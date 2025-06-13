import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {getMyFriends} from "../controller/user.controller.js"
import { getRecommendedUsers } from "../controller/user.controller.js";
const router = express.Router();
//apply auth middel ware to al routes

router.use(protectRoute)

router.get("/", getRecommendedUsers);
router.get("/friends",getMyFriends);

export default router;