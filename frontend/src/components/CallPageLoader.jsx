
import React from "react";
import { useThemeStore } from "../store/useThemeStore";

const CallPageLoader = () => {
  const { theme } = useThemeStore();
  return (
    <div
      className="flex justify-center items-center h-screen "
      data-theme={theme}
    >
      <div className="flex items-center justify-center  text-lg font-medium flex-col gap-1 text-[#1523a4]">
        <img src="/chatting-2-unscreen.gif" alt="chatting gif" />
        <div className="flex gap-2">
          Loading
          <span className="animate-pulse">.</span>
          <span className="animate-pulse [animation-delay:0.1s]">.</span>
          <span className="animate-pulse [animation-delay:0.2s]">.</span>
          <span className="animate-pulse [animation-delay:0.3s]">.</span>
          <span className="animate-pulse [animation-delay:0.4s]">.</span>
        </div>
      </div>
    </div>
  );
};

export default CallPageLoader;

