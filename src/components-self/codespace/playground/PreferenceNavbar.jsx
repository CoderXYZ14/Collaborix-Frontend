import React from "react";
import { Settings, Maximize } from "lucide-react";
const PreferenceNav = () => {
  return (
    <div className="flex items-center justify-between bg-gray-800 h-11 w-full">
      <div className="flex items-center text-white">
        <button className="flex cursor-pointer items-center rounded focus:outline-none bg-gray-700 hover:bg-gray-600 px-2 py-1.5 font-medium">
          <div className="flex items-center px-1">
            <div className="text-xs text-gray-300">JavaScript</div>
          </div>
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <button className="group flex items-center">
          <div className="h-4 w-4 text-gray-400 group-hover:text-white">
            <Settings />
          </div>
          <div className="hidden group-hover:block ml-1 text-xs text-gray-300">
            Settings
          </div>
        </button>

        <button className="group flex items-center">
          <div className="h-4 w-4 text-gray-400 group-hover:text-white">
            <Maximize />
          </div>
          <div className="hidden group-hover:block ml-1 text-xs text-gray-300">
            Full Screen
          </div>
        </button>
      </div>
    </div>
  );
};

export default PreferenceNav;
