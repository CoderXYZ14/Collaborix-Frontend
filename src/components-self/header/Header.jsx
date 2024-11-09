import { Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../store/themeSlice.js";
import UserMenu from "./components/UserMenu.jsx";
import useHandleProblemChange from "@/custom-hooks/useHandleProblemChange.js";
import { Logo, NavMenu, ProblemNavigation, AuthButtons } from "./components";

const Header = () => {
  const location = useLocation();
  const isAuthRoute =
    location.pathname === "/signin" || location.pathname === "/signup";
  const isProblemPage = location.pathname.startsWith("/problems/");
  const isLoggedIn = useSelector((state) => state.auth.status);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const handleProblemChange = useHandleProblemChange();

  const handleThemeToggle = () => dispatch(toggleDarkMode());
  return (
    <header
      className={`sticky w-full top-0 z-50 ${
        darkMode
          ? "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-gray-100"
          : "bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-700 text-gray-50"
      } shadow-lg backdrop-blur-sm bg-opacity-95`}
    >
      <nav>
        <div className="mx-auto px-4 pt-4 pb-3">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Logo />
            </Link>
            {isProblemPage ? (
              <ProblemNavigation
                onPrevious={() => handleProblemChange(false)}
                onNext={() => handleProblemChange(true)}
              />
            ) : (
              !isAuthRoute && <NavMenu />
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
                  <AuthButtons darkMode={darkMode} />
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
