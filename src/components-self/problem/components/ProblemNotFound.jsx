import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const ProblemNotFound = () => (
  <div className="min-h-screen bg-gradient-to-b from-slate-800 via-purple-900 to-purple-950 flex items-center justify-center p-4">
    <div className="w-full max-w-md bg-slate-900/50 backdrop-blur-sm rounded-lg border border-red-500/20 p-6">
      <div className="flex flex-col items-center text-center gap-4">
        <AlertTriangle className="h-6 w-6 text-red-500" />
        <h2 className="text-xl font-semibold text-red-500">
          Problem Not Found
        </h2>
        <p className="text-slate-300">
          We couldn't find the problem you're looking for. It may have been
          moved or deleted.
        </p>
        <Link
          to="/problemset"
          className="mt-2 px-4 py-2 text-sm text-red-500 hover:text-red-400 border border-red-500/20 hover:border-red-400/30 rounded-md transition-colors"
        >
          Return to Problems List
        </Link>
      </div>
    </div>
  </div>
);

export default ProblemNotFound;
