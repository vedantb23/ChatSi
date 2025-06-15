import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";

const Sidebar = () => {

    const { authUser } = useAuthUser
    const location = useLocation();
    const currentPath = location.pathname;

    return (
      <aside className="w-64 bg-base-200 border-r border-base-300 hidden lg:flex flex-col h-screen sticky top-0">
        <div className="p-3 border-b border-base-300 ">
          <Link to="/" className="flex items-center gap-2.5">
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
          </Link>
            </div>
            
            <nav className="flex-1 p-4 space-y-1">
                <Link to="/" className="btn btn-ghost justify-start w-full gap-3 px-3 normal-case">
                
                </Link>
            </nav>
      </aside>
    );
}

export default Sidebar
