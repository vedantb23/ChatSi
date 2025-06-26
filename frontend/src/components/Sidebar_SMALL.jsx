import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { BellElectricIcon, BellIcon, HomeIcon, User2, User2Icon, UserCircle2Icon, Users } from "lucide-react";

const Side = () => {

    const { authUser } = useAuthUser();
    const location = useLocation();
    const currentPath = location.pathname;

    return (
      <aside className="w-64 bg-base-200 border-r border-base-300  lg:flex flex-col h-screen sticky top-0 ">
        {/* // <aside className="w-64 bg-base-200 border-r border-base-300 flex flex-col h-screen sticky top-0"> */}
        <div className="p-3 border-b border-base-300 ">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="mb-4 flex items-center justify-center gap-2 ">
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
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-[45vh] ">
          <nav className="flex-1 p-4 space-y-3">
            <Link
              to="/"
              className={`btn btn-ghost rounded-md justify-start w-full gap-3 px-3 normal-case ${
                currentPath === "/" ? "btn-active" : ""
              }`}
            >
              <HomeIcon className="size-5 text-base-content opacity-70" />
              <span>Home</span>
            </Link>

            <Link
              to="/friends"
              className={`btn btn-ghost rounded-md justify-start w-full gap-3 px-3 normal-case ${
                currentPath === "/friends" ? "btn-active" : ""
              }`}
            >
              <Users className="size-5 text-base-content opacity-70" />
              <span>Friends</span>
            </Link>
            <Link
              to="/notifications"
              className={`btn btn-ghost rounded-md justify-start w-full gap-3 px-3 normal-case ${
                currentPath === "/notifications" ? "btn-active" : ""
              }`}
            >
              <BellIcon className="size-5 text-base-content opacity-70" />
              <span>Notifications</span>
            </Link>

            <Link
              to="/profile/me"
              className={`btn btn-ghost rounded-md justify-start w-full gap-3 px-3 normal-case ${
                currentPath === "/profile/me" ? "btn-active" : ""
              }`}
            >
              <User2 className="size-5 text-base-content opacity-70" />
              <span>My Profile</span>
            </Link>
          </nav>
          {/* <div className="flex-1" /> */}
          {/* user profile section */}
          <div className="p-4 space-y-3 border-t border-base-300 mt-auto mb-0">
            <div className="flex items-center gap-3">
              <div className="tooltip tooltip-top" data-tip="Thats You">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <Link to="/profile/me">
                      <img
                        src={authUser?.profilePic}
                        alt="User Avatar"
                        rel="noreferrer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1 ">
                <p className="font-semibold text-sm">{authUser?.fullName}</p>
                <p className="text-xs text-success flex items-center gap-1">
                  <span className="size-2 rounded-full bg-success inline-block" />
                  Online
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
}

export default Side
