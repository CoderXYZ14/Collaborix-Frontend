import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { CircleUser, Code2 } from "lucide-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { logout } from "@/store/authSlice";

import { useEffect } from "react"; // Import useEffect

const Header = () => {
  const location = useLocation();
  const isAuthRoute =
    location.pathname === "/signin" || location.pathname === "/signup";

  const isLoggedIn = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const accessToken = userData?.accessToken;
      if (!accessToken) {
        console.error("No access token found.");
        return;
      }

      await axios.post(
        "http://localhost:8000/api/v1/users/logout",
        {},
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Clear tokens from local storage
      localStorage.removeItem("userData");
      localStorage.removeItem("accessToken");

      // Dispatch logout action and navigate
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error(
        "Logout failed:",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <header>
      <nav className="dark w-full bg-white dark:bg-gray-900 text-white shadow-lg sticky z-50 top-0">
        <div className="mx-auto px-4 pt-3 pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-wrap space-x-3">
              <Code2 size={18} className="text-orange-600" />
              <div>
                <h1 className="text-sm font-bold text-gray-900">Collaborix</h1>
                <p className="text-xs text-orange-600">
                  Code Together, Build Better
                </p>
              </div>
            </div>
            <div>
              <ul className="flex items-center justify-between font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 text-sm ${
                        isActive ? "text-orange-600" : "text-gray-700"
                      } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signin"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 text-sm ${
                        isActive ? "text-orange-600" : "text-gray-700"
                      } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Signin
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 text-sm ${
                        isActive ? "text-orange-600" : "text-gray-700"
                      } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Signup
                  </NavLink>
                </li>
              </ul>
            </div>

            {!isAuthRoute && (
              <div className="flex items-center space-x-4">
                {isLoggedIn ? (
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger>
                        <Avatar className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem
                          onSelect={() => console.log("Profile clicked")}
                        >
                          Profile
                        </MenubarItem>
                        <MenubarItem
                          onSelect={() => console.log("Settings clicked")}
                        >
                          Settings
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem
                          onSelect={() => console.log("Help clicked")}
                        >
                          Help
                        </MenubarItem>
                        <MenubarItem onSelect={handleLogout}>
                          Sign Out
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                ) : (
                  <>
                    <Link to="/signin">
                      <Button className="px-4 duration-200 flex items-center space-x-2 text-sm text-gray-200 hover:text-gray-300 transition-colors">
                        Signin
                      </Button>
                    </Link>
                    <Link to="/signup">
                      <Button className="rounded-lg bg-orange-600 hover:bg-orange-700 w-full text-sm">
                        Signup
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
