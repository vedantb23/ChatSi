import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {getMyFriends} from "../controller/user.controller.js"
import {
  getRecommendedUsers,
  sendFriendRequest,
  acceptFriendRequest,
  getFriendRequests,
  getOutgoingFriendReqs,
} from "../controller/user.controller.js";
const router = express.Router();
//apply auth middel ware to al routes

router.use(protectRoute)

router.get("/", getRecommendedUsers);
router.get("/friends",getMyFriends);
router.post("friend-request/:id", sendFriendRequest);
router.put("friend-request/:id/accept", acceptFriendRequest);

router.get("friend-requests", getFriendRequests);
router.get("/outgoing-friend-requests", getOutgoingFriendReqs);

export default router;