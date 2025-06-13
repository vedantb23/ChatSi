import {StreamChat} from "stream-chat"
import "dotenv/config"

const apiKey = process.env.STEAM_API_KEY;
const apiSecret = process.env.STEAM_API_SECRET;

if (!apiKey || !apiSecret) {
    console.log("Stream keys are invalid")
}


const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
    try {
        await streamClient.upsertUsers([userData]);
        return userData;
    } catch (error) {
        console.log("erro upsertUsers  stream user", error);
    }
}

// 
export const generateStreamToken=(userId) => {
    //getStreamToken
    try {
        const userTdStr = userId.toString();
        return streamClient.createToken(userTdStr);
    } catch (error) {
        console.error("error gen stream token ", error);
    }
}
