import { Code2 } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center flex-wrap space-x-3">
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10">
        <Code2 size={20} className="text-gray-100" />
      </div>
      <div>
        <h1 className="text-base font-bold tracking-wide text-gray-100 font-mono">
          Collaborix
        </h1>
        <p className="text-xs font-medium tracking-wide text-purple-300">
          {"<Code /> Together, Build Better"}
        </p>
      </div>
    </div>
  );
};

export default Logo;
