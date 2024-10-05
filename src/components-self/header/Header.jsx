import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 text-white shadow-lg">
      <div className="mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Code2 size={24} className="text-orange-600 font-" />
            <div>
              <h1 className="text-sm font-bold text-gray-900">Collaborix</h1>
              <p className="text-xs text-orange-600">
                Code Together, Build Better
              </p>
            </div>
          </div>

          {/* Right section - Sign Up button */}
          <div className="flex items-center space-x-4">
            <Button className=" px-4 duration-200 flex items-center space-x-2 text-sm text-gray-200 hover:text-gray-300 transition-colors ">
              Signin
            </Button>

            <Button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 text-sm">
              Signup
            </Button>
          </div>
        </div>
      </div>
      <hr className=" border-gray-300" />
    </header>
  );
};

export default Header;
