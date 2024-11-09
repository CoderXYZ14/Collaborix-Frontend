import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, AlignJustify } from "lucide-react";

const ProblemNavigation = ({ onPrevious, onNext }) => {
  return (
    <div className="flex items-center gap-2 flex-1 justify-center">
      <div
        className="flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 h-8 w-8 cursor-pointer transition-all duration-200 border border-white/10"
        onClick={onPrevious}
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
        onClick={onNext}
      >
        <ChevronRight size={18} />
      </div>
    </div>
  );
};

export default ProblemNavigation;
