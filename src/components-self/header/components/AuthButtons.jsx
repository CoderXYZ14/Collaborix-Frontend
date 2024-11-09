import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AuthButtons = ({ darkMode }) => {
  return (
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
  );
};

export default AuthButtons;
