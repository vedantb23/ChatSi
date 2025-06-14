
import React from "react";
import { HashLoader } from "react-spinners";

const PageLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <HashLoader color="#00bcd4" size={60} />
    </div>
  );
};

export default PageLoader;

