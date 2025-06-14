import React from "react";
import { useState, useEffect } from "react";
const SignUpPage = () => {
  const [signupData, setsignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="h-screen flex justify-center items-center p-4 
    sm:p-6 md:p-8 "
      data-theme="night"
    >
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* sign up left  */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* logo */}
          <div className="mb-4 flex items-center justify-start gap-2 ">
            <img
              src="/logo-bh-white-unscreen.gif"
              alt="Logo animation"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
