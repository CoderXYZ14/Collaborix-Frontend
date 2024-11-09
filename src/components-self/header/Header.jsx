import React from "react";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  AlignJustify,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../store/themeSlice.js";
import UserMenu from "../header/UserMenu";
import useHandleProblemChange from "@/custom-hooks/useHandleProblemChange.js";

const Header = () => {
  const location = useLocation();
  const isAuthRoute =
    location.pathname === "/signin" || location.pathname === "/signup";
  const isProblemPage = location.pathname.startsWith("/problems/");
  const isLoggedIn = useSelector((state) => state.auth.status);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const handleProblemChange = useHandleProblemChange();

  const handleThemeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <header
      className={`sticky top-0 z-50 ${
        darkMode
          ? "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-gray-100"
          : "bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-700 text-gray-50"
      } shadow-lg backdrop-blur-sm bg-opacity-95`}
    >
      <nav>
        <div className="mx-auto px-4 pt-4 pb-3">
          <div className="flex items-center justify-between">
            <Link to="/">
              <div className="flex items-center flex-wrap space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10">
                  <Code2 size={20} className="text-gray-100" />
                </div>
                <div>
                  <h1 className="text-base font-bold tracking-wide text-gray-100 font-mono">
                    Collaborix
                  </h1>
                  <p className="text-xs font-medium tracking-wide text-purple-300">
                    {"<Code /> Together, Build Better"}
                  </p>
                </div>
              </div>
            </Link>
            {isProblemPage ? (
              <div className="flex items-center gap-2 flex-1 justify-center">
                <div
                  className="flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 h-8 w-8 cursor-pointer transition-all duration-200 border border-white/10"
                  onClick={() => handleProblemChange(false)}
                >
                  <ChevronLeft size={18} />
                </div>
                <Link
                  to="/"
                  className="flex items-center gap-2 font-medium max-w-[170px] text-white cursor-pointer"
                >
                  <div className="hover:bg-white/10 p-1.5 rounded-lg transition-all duration-200">
                    <AlignJustify size={18} />
                  </div>
                  <p className="text-sm font-medium">Problem List</p>
                </Link>
                <div
                  className="flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 h-8 w-8 cursor-pointer transition-all duration-200 border border-white/10"
                  onClick={() => handleProblemChange(true)}
                >
                  <ChevronRight size={18} />
                </div>
              </div>
            ) : (
              <ul className="flex items-center justify-between font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 px-3 duration-200 text-sm font-medium rounded-lg ${
                        isActive
                          ? "text-white bg-white/10 font-semibold"
                          : "text-gray-100 hover:text-white"
                      } hover:bg-white/5 transition-all`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/problemset"
                    className={({ isActive }) =>
                      `block py-2 px-3 duration-200 text-sm font-medium rounded-lg ${
                        isActive
                          ? "text-white bg-white/10 font-semibold"
                          : "text-gray-100 hover:text-white"
                      } hover:bg-white/5 transition-all`
                    }
                  >
                    Problems
                  </NavLink>
                </li>
              </ul>
            )}
            {!isAuthRoute && (
              <div className="flex items-center space-x-4">
                <div
                  onClick={handleThemeToggle}
                  className="cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  {darkMode ? (
                    <Sun size={18} className="text-amber-100" />
                  ) : (
                    <Moon size={18} className="text-indigo-100" />
                  )}
                </div>
                {isLoggedIn ? (
                  <UserMenu />
                ) : (
                  <>
                    <Link to="/signin">
                      <Button
                        className={`${
                          darkMode
                            ? "bg-slate-800 hover:bg-slate-700"
                            : "bg-white/10 hover:bg-white/20"
                        } text-white border-none duration-200 flex items-center space-x-2 text-sm font-medium transition-all rounded-lg px-4`}
                      >
                        Sign in
                      </Button>
                    </Link>
                    <Link to="/signup">
                      <Button
                        className={`${
                          darkMode
                            ? "bg-indigo-500 hover:bg-indigo-400 text-white"
                            : "bg-white hover:bg-gray-100 text-purple-600"
                        } rounded-lg w-full text-sm font-medium transition-all duration-200 px-4`}
                      >
                        Sign up
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
