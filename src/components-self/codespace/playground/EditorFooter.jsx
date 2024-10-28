import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import React from "react";

const EditorFooter = () => {
  return (
    <div className="flex  absolute bottom-0 z-10 w-full">
      <div className="mx-5 my-3 flex justify-between w-full">
        <div className="ml-auto flex items-center space-x-4">
          <Button className="px-5 py-1.5 text-sm font-medium items-center  transition-all focus:outline-none inline-flex bg-neutral-800  hover:bg-neutral-700 text-gray-50 rounded-lg">
            Run
          </Button>
          <Button className="px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-gray-50 bg-green-600 hover:bg-green-700 rounded-lg">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditorFooter;
