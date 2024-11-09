import { CheckCircle } from "lucide-react";

const ProblemDetails = ({ problem, isSolved, bgColor, textColor }) => (
  <div className="space-y-6">
    <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
      {problem.title}
    </h1>
    <div className="flex items-center space-x-2">
      <span
        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor}`}
      >
        {problem.difficulty}
      </span>
      {isSolved && <CheckCircle color="#078827" className="w-4 h-4" />}
    </div>
  </div>
);

export default ProblemDetails;
