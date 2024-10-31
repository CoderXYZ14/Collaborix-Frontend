import React from "react";
import { Maximize } from "lucide-react";

const PreferenceNav = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-violet-200 from-10% to-purple-100 dark:bg-gradient-to-b dark:from-slate-800 dark:from-5% dark:to-purple-800 transition-colors duration-200">
      <div className="flex h-12 items-center justify-between bg-gray-100 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 transition-colors duration-200">
        <div className="flex items-center">
          <div className="px-6 py-2.5 text-sm font-medium bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-b-2 border-violet-500 transition-colors duration-200">
            JavaScript
          </div>
        </div>

        <button
          className="group flex items-center mr-6"
          aria-label="Toggle fullscreen"
        >
          <div className="h-4 w-4 text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-all duration-200 hover:scale-110">
            <Maximize size={22} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default PreferenceNav;
