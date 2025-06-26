import React from 'react'
import { useParams } from "react-router"
import { useState, useEffect } from 'react';
import useAuthUser from "../hooks/useAuthUser"
import { useQuery } from '@tanstack/react-query';
import { getStreamToken } from '../lib/api';
import {toast} from "react-hot-toast"
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import { StreamChat } from 'stream-chat';
import ChatLoader from '../components/ChatLoader';
import CallButton from '../components/CallButton';
import ParticleBackground from "../components/ParticleBackground";

const STREAM_API_KEY = import.meta.env.VITE_STREAM_API_KEY;

const ChatPage = () => {

  const { id:targetUserId} = useParams();
  // console.log(id)
  const [chatClient, setchatClient] = useState(null)
  const [channel, setchannel] = useState(null);
  const [loading, setloading] = useState(null);
  const { authUser } = useAuthUser();

  const { data:tokenData } = useQuery({
    queryKey: ["streamToken"],
    queryFn: getStreamToken,
    enabled: !!authUser
  })

  useEffect(() => {
    const initChat=async () => {
      if (!tokenData?.token || !authUser) return;

      try {
        console.log("strem chat starts")

        const client = StreamChat.getInstance(STREAM_API_KEY);
        await client.connectUser({
          id: authUser._id,
          name: authUser.fullName,
          image: authUser.profilePic,
        },tokenData.token);


        const channelId = [authUser._id, targetUserId].sort().join("-");

        const currChannel = client.channel("messaging", channelId, {
          members: [authUser._id, targetUserId],
        });

        await currChannel.watch(); 
        setchatClient(client);
        setchannel(currChannel);
      } catch (error) {
        console.log("char error",error)
        toast.error(error)
      }
      finally {
        setloading(false)
      }


    }
    initChat();
  }, [tokenData,authUser,targetUserId])
  

  if(loading || !chatClient || !channel) return <ChatLoader/>


  const handleVideoCall=() => {
    if (channel) {
      const callUrl = `${window.location.origin}/call/${channel.id}`;

      channel.sendMessage({
        text: `I have started video call! Click here to join:${callUrl}`,
        
      })
      toast.success("Video Call Started!")
    }
  }
  
  return (
    <div className="h-[84vh] relative  overflow-hidden ">
      <ParticleBackground />
      <div className=" m-5 h-screen w-full mx-auto mt-5 overflow-hidden">
        <Chat client={chatClient} theme="messaging dark">
          <Channel channel={channel}>
            <div className="w-full  relative">
              <CallButton handleVideoCall={handleVideoCall} />
              <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput focus />
              </Window>
            </div>
            <Thread />
          </Channel>
        </Chat>
      </div>
    </div>
  );
}

export default ChatPage
