import { Button } from "@/components/ui/button";
import {
  Code2,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  List,
  AlignJustify,
} from "lucide-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../store/themeSlice.js";
import UserMenu from "../header/UserMenu";

const ProblemHeader = () => {
  const location = useLocation();
  const isAuthRoute =
    location.pathname === "/signin" || location.pathname === "/signup";
  const isLoggedIn = useSelector((state) => state.auth.status);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header>
      <nav className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg sticky z-50 top-0">
        <div className="mx-auto px-4 pt-3 pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-wrap space-x-3">
              <Code2 size={18} className="text-orange-600" />
              <div>
                <h1 className="text-sm font-bold text-gray-900 dark:text-white">
                  Collaborix
                </h1>
                <p className="text-xs text-orange-600">
                  Code Together, Build Better
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 flex-1 justify-center">
              <div className="flex items-center justify-center rounded bg-dark-fill-3 hover:scale-110 h-8 w-8 cursor-pointer">
                <ChevronLeft size={20} />
              </div>
              <Link
                to="/"
                className="flex items-center gap-1 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer"
              >
                <div className="hover:scale-110">
                  <AlignJustify size={20} />
                </div>
                <p className="text-sm">Problem List</p>
              </Link>
              <div className="flex items-center justify-center rounded bg-dark-fill-3 hover:scale-110 h-8 w-8 cursor-pointer">
                <ChevronRight size={20} />
              </div>
            </div>
            {!isAuthRoute && (
              <div className="flex items-center space-x-4">
                <div className="cursor-pointer p-2 rounded-full transition-colors duration-200">
                  {darkMode ? (
                    <Sun
                      size={20}
                      className="text-yellow-400 hover:text-yellow-300"
                    />
                  ) : (
                    <Moon
                      size={20}
                      className="text-gray-600 hover:text-gray-700"
                    />
                  )}
                </div>
                {isLoggedIn ? (
                  <UserMenu />
                ) : (
                  <>
                    <Link to="/signin">
                      <Button className="px-4 duration-200 flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
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

export default ProblemHeader;
