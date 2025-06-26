import React from 'react'
import useAuthUser from '../hooks/useAuthUser';
import { Link, useLocation } from 'react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout } from '../lib/api';
import toast from 'react-hot-toast';
import { BellDotIcon, LogOutIcon, List } from "lucide-react";
import { ThemeProvider } from '@mui/material/styles';
import ThemeSelector from './ThemeSelector';
import useIsSmallScreen from "../hooks/useIsSmallScreen";
import Sidebar_SMALL from './Sidebar_SMALL';
const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");
  const isCallPage = location.pathname?.startsWith("/call");
  const isHomePage = location.pathname?.startsWith("/");
  const isSmallScreen = useIsSmallScreen(); // Tailwind's `sm` is 640px
  // console.log(window.innerWidth);
  // 
  const queryClient = useQueryClient();
  // console.log(location);
  const { mutate: logoutMutation } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      toast.success(
        "Logout done! Thanks for sharing your time with us — see you again! "
      );
    },
  });
  const showcustomsidebar=() => {
    
  }
  
  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-3 justify-end w-full">
          {/* logo only i hcat paeg
           */}
          {(isChatPage || isCallPage) && (
            <div className="mb-4 flex items-center justify-center gap-2 ">
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
          )}

          {isSmallScreen && isHomePage && (
            <div className="mb-4 flex items-center justify-center gap-2 ">
              <div className="drawer lg:drawer-open">
                <input
                  id="nav-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col justify-center items-center mx-2 mt-2">
                  <label
                    htmlFor="nav-drawer"
                    className=" btn-accent drawer-button lg:hidden m-1 rounded-sm"
                  >
                    <List />
                  </label>
                </div>
                <div className="drawer-side ">
                  <label
                    htmlFor="nav-drawer"
                    className="drawer-overlay"
                  ></label>
                  <Sidebar_SMALL />
                </div>
              </div>

              <Link to="/">
                <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                  ChatSi
                </span>
              </Link>
            </div>
          )}

          <div className="flex items-center gap-3 sm:gap-4  ml-auto ">
            <Link to="/notifications">
              <div className="tooltip tooltip-bottom" data-tip="Notifications">
                <button className="btn btn-ghost btn-circle">
                  <BellDotIcon className="h-6 w-6 text-base-content opacity-70 " />
                </button>
              </div>
            </Link>
          </div>

          {/* todo */}
          <ThemeSelector />

          <div className="tooltip tooltip-bottom" data-tip="Visit your Profile">
            <div className="avatar">
              <div className="w-9 rounded-full  ">
                <Link to="/profile/me">
                  <img
                    src={authUser?.profilePic}
                    alt="User Avatar"
                    className="border border-transparent hover:border-black rounded-full"
                    rel="noreferrer"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* logout */}
          <div className="tooltip tooltip-bottom" data-tip="Logout">
            <button
              className="btn btn-ghost btn-circle"
              onClick={logoutMutation}
            >
              <LogOutIcon className="h-6 w-6 text-base-content opacity-65" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
