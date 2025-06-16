import React from 'react'
import useAuthUser from '../hooks/useAuthUser';
import { Link, useLocation } from 'react-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout } from '../lib/api';
import toast from 'react-hot-toast';
import { BellDotIcon, LogOutIcon } from 'lucide-react';
import { ThemeProvider } from '@mui/material/styles';
import ThemeSelector from './ThemeSelector';
const Navbar = () => {
    const { authUser } = useAuthUser();
    const location = useLocation();
    const isChatPage = location.pathname?.startsWith("/chat");
    const queryClient = useQueryClient();
    // console.log(location);
    const { mutate: logoutMutation } = useMutation({
        mutationFn: logout,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["authUser"] });
            toast.success(
              "Logout done! Thanks for sharing your time with us — see you again! "
            );
          
        }
        
    })

    return (
      <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3 justify-end w-full">
            {/* logo only i hcat paeg
             */}
            {isChatPage && (
              <div className="mb-4 flex items-center justify-center gap-2 ">
                <img
                  src="/logo-bh-white-unscreen.gif"
                  alt="Logo animation"
                  className="text-primary w-[85px]  "
                />
                <span className="text-3xl  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                  ChatSi
                </span>
              </div>  
            )}

            <div className="flex items-center gap-3 sm:gap-4  ml-auto ">
              <Link to="/notifications">
                <div
                  className="tooltip tooltip-bottom"
                  data-tip="Notifications"
                >
                  <button className="btn btn-ghost btn-circle">
                    <BellDotIcon className="h-6 w-6 text-base-content opacity-70 " />
                  </button>
                </div>
              </Link>
            </div>

            {/* todo */}
            <ThemeSelector />

                <div className="tooltip tooltip-bottom" data-tip="Thats You">
                    <div className="avatar">
                    <div className="w-9 rounded-full">
                  <img
                    src={authUser?.profilePic}
                    alt="User Avatar"
                    rel="noreferrer"
                  />
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
