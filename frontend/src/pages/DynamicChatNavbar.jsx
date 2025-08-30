import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DynamicChatNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
    //   const scrollTop =
    //     window.pageYOffset || document.documentElement.scrollTop;
    //   setIsScrolled(scrollTop > 50);
    };
    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    // setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const closeDropdowns = () => {
    // setOpenDropdown(null);
  };

  return (
    <div className="bg-transparent">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-8 ${
          isScrolled
            ? "mt-5 mx-6 md:mx-20 rounded-2xl bg-blue-950/50 backdrop-blur-sm border border-blue-400/10 shadow-xl"
            : "mt-0 mx-0 rounded-none bg-gray-900/20 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between items-center h-16 text-gray-200">
            {/* Logo */}
            <div className="mb-2 flex items-center justify-center gap-2 ">
              <Link to="/openhomepage">
                <img
                  src="/logo-bh-white-unscreen.gif"
                  alt="Logo animation"
                  className="text-primary w-[85px]  "
                />
              </Link>
              <Link to="/openhomepage">
                <span className="text-3xl  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                  ChatSi
                </span>
              </Link>
            </div>

            {/* Center Navigation */}
           
            {/* Right Side */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <div className="hidden sm:flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="input input-sm bg-transparent border border-gray-600 rounded-lg w-32 focus:w-48 transition-all duration-300 text-gray-200 placeholder-gray-400 focus:border-blue-400 h-10 pr-10"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-search text-blue-400 text-sm" />
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <Link to="/login">
                <button className="btn btn-active btn-primary btn-sm rounded-lg scale-110 hover:scale-125">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DynamicChatNavbar;
