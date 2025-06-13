import User from "../models/User.js"
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
            .select("friends").populate
    } catch (error) {
        
    }
}