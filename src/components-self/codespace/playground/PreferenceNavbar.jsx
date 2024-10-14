import React from "react";
import { Settings, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
const PreferenceNav = () => {
  return (
    <div className="bg-gray-900">
      <div className="flex items-center justify-between  bg-black/30 h-11 w-full">
        <Button className="ml-2 bg-gray-800 rounded-sm px-3 py-2 text-xs cursor-pointer text-white hover:bg-gray-700">
          JavaScript
        </Button>

        <button className="group flex items-center mr-5">
          <div className="h-4 w-4 text-gray-600 hover:text-gray-500 hover:scale-110">
            <Maximize size={22} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default PreferenceNav;
