
import React from "react";
import { HashLoader } from "react-spinners";
import { useThemeStore } from "../store/useThemeStore";
import { useEffect,useRef } from "react";
const PageLoader = () => {
  const { theme } = useThemeStore();
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0; 
    }
  }, []);

  return (
    <div
      className="flex justify-center items-center h-screen "
      data-theme={theme}
    >
      <div className="flex items-center overflow-hidden rounded-3xl justify-center space-x-1 text-lg font-medium flex-col gap-5 text-[#00bcd4] w-5/12">
        <div className="rounded-3xl">
          <video
            ref={videoRef}
            src="/software-development-animation-download-in-lottie-json-gif-static-svg-file-formats--web-programming-coding-design-animations-3618993.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <HashLoader color="#00bcd4" size={60} />
        <div className="flex gap-2">
          Please wait backend server is starting !
        </div>
        <h3 className="text-gray-400 opacity-60">Usually takes 1-5 minutes.</h3>
      </div>
    </div>
  );
};

export default PageLoader;

