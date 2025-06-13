import User from "../models/User.js"
import FriendRequest from "../models/FriendRequest.js";
export async function getRecommendedUsers(req, res) {

try {
    const currentUserId = req.user.id;
    const currentUser = req.user;

    const recommendedUsers = await User.find({
      $and: [{ _id: { $ne: currentUserId } }, { $id: { $nin: currentUserId.friends} },{isOnboarded:true}],
    });
    res.status(200).json(recommendedUsers );
} catch (error) {
    console.log("error in getrecommended controler",error)
    res.status(400).json({message:"Internal server error"});

}

}
export async function getMyFriends(req, res) {
    try {
        
        const user = await User.findById(req.user.id)
          .select("friends")
          .populate(
            "friends",
            "fullName profilePic nativeLanguage learningLanguage"
        );
    res.status(200).json(user.friends);
        
    } catch (error) {
        console.log("error in getfriends controler", error);
        res.status(400).json({ message: "Internal server error" });
    
    }
}

export async function sendFriendRequest(req, res) {
    try {
        
        const myId = req.user.id;
        const { id: recipientId } = req.params;

        // prevernt seld req
        if (myId === recipientId) {
            return res.status(400).json({ message: "You cannot be own friend" });

        }

        const recipient = await User.findById(recipientId);
            return res.status(400).json({ message: "You cannot be own friend" });
            if (!recipient) {
                return res.status(400).json({ message: "recipient does not exist" });
        }
        // if already fri
        if (recipient.friends.includes(myId)) {
            return res
              .status(400)
              .json({ message: "You are already friends!" });
        }
        // if already req
        const existingRequest = await FriendRequest.findOne({
          $or: [
            { sender: myId, recipient: recipientId },
            { sender: recipientId, recipient: myId },
          ],
        });
        if (existingRequest) {
            return res
              .status(400)
              .json({ message: "An request already exist between you and him/her!" });
        }

        const friendRequest = await FriendRequest.create({
          sender: myId,
          recipient: recipientId,
        });
        return res.status(201).json(friendRequest);
    } catch (error) {
        console.log("error in friendRequest req", error);
        // console.log("error in getfriends controler", error);
        res.status(400).json({ message: "Internal server error" });
    }
}


export async function acceptFriendRequest(req, res) {
try {
    const { id: requestId } = req.params;
    const friendRequest = await FriendRequest.findById(requestId);
    if (!friendRequest) {
        res.status(400).json({ message: "Request not found " });
    }
    // verify curr use is rever\
    if (friendRequest.recipient.toString() !== req.user.id) {
      res.status(403).json({ message: "You are not authorized to accept req" });
      //recipient
    }
    friendRequest.status = "accepted";
    await friendRequest.save();
    //add each user to other fri list

    await User.findByIdAndUpdate(friendRequest.sender, {
      $addToSet: { friends: friendRequest.recipient },
    });
    await User.findByIdAndUpdate(friendRequest.recipient, {
      $addToSet: { friends: friendRequest.sender },
    });
     res.status(200).json({message:"Friend request Accepted!"});

} catch (error) {
    console.log("error in accept req", error);
    res.status(400).json({ message: "Internal server error" });
}

}

export async function getFriendRequests(req, res) {
    try {
        const incomingReqs = await FriendRequest.find({
          recipient: req.user.id,
          status: "pending",
        }).populate(
          "sender",
          "fullName profilePic nativeLanguage learningLanguage"
        );

        const acceptedReqs = await FriendRequest.find({
          sender: req.user.id,
          status: "accepted",
        }).populate(
          "recipient",
          "fullName profilePic "
        );

        res.status(200).json({ incomingReqs, acceptedReqs });

    } catch (error) {
        console.log("error in accept2 req", error);
        res.status(400).json({ message: "Internal server error" });
    }
}


export async function getOutgoingFriendReqs(req, res) {
try {
    const outgoingRequests = await FriendRequest.find({
      sender: req.user.id,
      status: "pending",
    }).populate(
      "recipient",
      "fullName profilePic nativeLanguage learningLanguage"
    );
    res.status(200).json(outgoingRequests);
} catch (error) {
    console.log("error in outogingreq req", error);
    res.status(400).json({ message: "Internal server error" });
}

}