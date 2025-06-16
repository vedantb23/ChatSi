
import React from "react";
import { HashLoader } from "react-spinners";
import { useThemeStore } from "../store/useThemeStore";

const PageLoader = () => {
  const { theme } = useThemeStore();
  return (
    <div
      className="flex justify-center items-center h-screen "
      data-theme={theme}
    >
      <div className="flex items-center justify-center space-x-1 text-lg font-medium flex-col gap-5 text-[#00bcd4]">
        <HashLoader color="#00bcd4" size={60} />
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

export default PageLoader;

