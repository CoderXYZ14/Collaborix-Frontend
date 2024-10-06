import { Button } from "@/components/ui/button";
import { CircleUser, Code2 } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const location = useLocation();
  const isAuthRoute =
    location.pathname === "/signin" || location.pathname === "/signup";

  const isLoggedIn = useSelector((state) => state.auth.status);

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
                      }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
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
                      }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
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
                      }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Signup
                  </NavLink>
                </li>
              </ul>
            </div>

            {!isAuthRoute && (
              <div className="flex items-center space-x-4">
                {!isLoggedIn ? (
                  <div className="mr-4">
                    <Avatar className="w-8 h-8">
                      {" "}
                      {/* Reduced size */}
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
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
