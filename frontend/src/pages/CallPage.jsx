import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import useAuthUser from '../hooks/useAuthUser';
import { useQuery } from '@tanstack/react-query';
import { getStreamToken } from '../lib/api'
import {
  StreamVideo,
  StreamVideoClient,
  StreamCall,
  CallControls,
  SpeakerLayout,
  StreamTheme,
  CallingState,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import toast from 'react-hot-toast';
import CallPageLoader from '../components/CallPageLoader';
const STREAM_API_KEY = import.meta.env.VITE_STREAM_API_KEY;
// console.log(STREAM_API_KEY);
const CallPage = () => {

  const { id: callId } = useParams(null);
  const [client, setclient] = useState(null)
  const [call, setcall] = useState(null);

  const [isConnecting, setisConnecting] = useState(true);

  const { authUser, isLoading } = useAuthUser();

  const { data:tokenData } = useQuery({
    queryKey: ["streamToken"],
    queryFn: getStreamToken,
    enabled:!!authUser
  })
  useEffect(() => {
    const initCall=async () => {

      if (!tokenData.token || !authUser || !callId) return;
      try {
        console.log("starting vdo call")

        const user = {
          id: authUser._id,
          name: authUser.fullName,
          image:authUser.profilePic,
        };
        const videoClient = new StreamVideoClient({
          apiKey: STREAM_API_KEY,
          user,
          token: tokenData.token,
        })
        const callInstance = videoClient.call("default", callId);

        await callInstance.join({create:true})
        
setclient(videoClient)
setcall(callInstance)

      } catch (error) {
        console.log("error in video call", error)
        toast.error(error)
      }
      finally {
        setisConnecting(false)
      }
    }
    
    initCall();
  }, [tokenData,authUser,callId])
  

  if(isLoading || isConnecting )return <CallPageLoader/>
  return (
    <div className="h-[calc(100vh-4rem)]  flex flex-col items-center justify-center text-white ">
      <div className="relative ">
        {client && call ? (
          <StreamVideo client={client}>
            <StreamCall call={call}>
              <CallContent />
            </StreamCall>
          </StreamVideo>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p>Could not connect to server please refresh and try again!</p>
          </div>
        )}
      </div>
    </div>
  );
}


const CallContent=() => {
  const {useCallCallingState}=useCallStateHooks()
  const callingState = useCallCallingState();

  const navigate = useNavigate();
  if(callingState===CallingState.LEFT) return navigate("/")
  return (
    // <StreamTheme>
    //   <SpeakerLayout />
    //   <CallControls/>
    // </StreamTheme>
    <StreamTheme>
      <div className="w-full h-full flex flex-col">
        <SpeakerLayout className="flex-1" />
        <CallControls />
      </div>
    </StreamTheme>
  );
}


export default CallPage
