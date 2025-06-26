import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DynamicChatNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const closeDropdowns = () => {
    setOpenDropdown(null);
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
              <Link to="/">
                <img
                  src="/logo-bh-white-unscreen.gif"
                  alt="Logo animation"
                  className="text-primary w-[85px]  "
                />
              </Link>
              <Link to="/">
                <span className="text-3xl  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                  ChatSi
                </span>
              </Link>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Public Chats */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("public")}
                  className="btn btn-ghost btn-sm h-10 rounded-lg hover:bg-blue-500/20 text-sm px-3"
                >
                  <i className="fas fa-comments text-blue-400 mr-1" />
                  Public Rooms
                </button>
                {openDropdown === "public" && (
                  <ul
                    className="absolute top-full mt-2 w-48 bg-gray-800/90 backdrop-blur-md rounded-lg border border-gray-700 shadow-lg z-50"
                    onMouseLeave={closeDropdowns}
                  >
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-blue-500/20"
                      >
                        🇺🇸 English Practice
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-blue-500/20"
                      >
                        🇯🇵 Japanese Corner
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-blue-500/20"
                      >
                        🇩🇪 German Learners
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Friends */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("friends")}
                  className="btn btn-ghost btn-sm h-10 rounded-lg hover:bg-green-500/20 text-sm px-3"
                >
                  <i className="fas fa-user-friends text-green-400 mr-1" />
                  Friends
                </button>
                {openDropdown === "friends" && (
                  <ul
                    className="absolute top-full mt-2 w-48 bg-gray-800/90 backdrop-blur-md rounded-lg border border-gray-700 shadow-lg z-50"
                    onMouseLeave={closeDropdowns}
                  >
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-green-500/20"
                      >
                        Friend Requests
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-green-500/20"
                      >
                        My Friends
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-green-500/20"
                      >
                        Find New People
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Learn */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("learn")}
                  className="btn btn-ghost btn-sm h-10 rounded-lg hover:bg-yellow-500/20 text-sm px-3"
                >
                  <i className="fas fa-book-open text-yellow-300 mr-1" />
                  Learn
                </button>
                {openDropdown === "learn" && (
                  <ul
                    className="absolute top-full mt-2 w-48 bg-gray-800/90 backdrop-blur-md rounded-lg border border-gray-700 shadow-lg z-50"
                    onMouseLeave={closeDropdowns}
                  >
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-yellow-500/20"
                      >
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-yellow-500/20"
                      >
                        Flashcards
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-yellow-500/20"
                      >
                        Speaking Practice
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Discover */}
              <button className="btn btn-ghost btn-sm h-10 rounded-lg hover:bg-emerald-500/20 text-sm px-3">
                <i className="fas fa-compass text-emerald-400 mr-1" />
                Discover
              </button>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <div className="hidden sm:flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="input input-sm bg-transparent border border-gray-600/30 rounded-lg w-32 focus:w-48 transition-all duration-300 text-gray-200 placeholder-gray-400 focus:border-blue-400 h-10 pr-10"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-search text-blue-400 text-sm" />
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button className="btn btn-active btn-primary btn-sm rounded-lg scale-110 hover:scale-125">
                <Link to="/login">Login</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DynamicChatNavbar;
