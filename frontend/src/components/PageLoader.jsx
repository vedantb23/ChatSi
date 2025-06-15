
import React from "react";
import { HashLoader } from "react-spinners";
import { useThemeStore } from "../store/useThemeStore";

const PageLoader = () => {
  const { theme } = useThemeStore();
  return (
    <div className="flex justify-center items-center h-screen " data-theme={theme}>
      <HashLoader color="#00bcd4" size={60} />
    </div>
  );
};

export default PageLoader;

