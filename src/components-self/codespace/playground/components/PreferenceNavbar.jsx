import { Maximize, Minimize, RotateCcw } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import useFullscreen from "@/custom-hooks/useFullscreen";

const PreferenceNavbar = ({ onReset }) => {
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  return (
    <div className="flex flex-col bg-gradient-to-b from-violet-200 from-10% to-purple-100 dark:bg-gradient-to-b dark:from-slate-800 dark:from-5% dark:to-purple-800 transition-colors duration-200">
      <div className="flex h-12 items-center justify-between bg-gray-100 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 transition-colors duration-200">
        <div className="flex items-center">
          <div className="px-6 py-2.5 text-sm font-medium bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-b-2 border-violet-500 transition-colors duration-200">
            JavaScript
          </div>
        </div>
        <div className="flex">
          <div
            className="group flex items-center mr-3 bg-transparent cursor-pointer"
            aria-label="Reset button"
            onClick={onReset}
          >
            <div className="h-4 w-4 text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-all duration-200 hover:scale-110 z-10">
              <HoverCard>
                <HoverCardTrigger>
                  <RotateCcw size={18} />
                </HoverCardTrigger>
                <HoverCardContent className="text-xs bg-white px-0 py-1 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-lg rounded-lg">
                  Reset to default Code definition
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div
            className="group flex items-center mr-3 bg-transparent cursor-pointer"
            aria-label="Toggle fullscreen"
            onClick={toggleFullscreen}
          >
            <div className="h-4 w-4 text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-all duration-200 hover:scale-110 z-10">
              <HoverCard>
                <HoverCardTrigger>
                  {isFullscreen ? (
                    <Minimize size={18} />
                  ) : (
                    <Maximize size={18} />
                  )}
                </HoverCardTrigger>
                <HoverCardContent className="text-xs bg-white px-0 py-1 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-lg rounded-lg">
                  {isFullscreen ? "Exit full screen" : "Full screen"}
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferenceNavbar;
