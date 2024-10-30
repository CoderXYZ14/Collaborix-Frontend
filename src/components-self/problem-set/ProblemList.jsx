import { CircleCheckBig, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import useGetProblems from "@/custom-hooks/useGetProblems.js";

const ProblemList = ({ setLoading }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "text-green-600";
      case "medium":
        return "text-yellow-600";
      case "hard":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };
  const problems = useGetProblems(setLoading);
  return (
    <tbody>
      {problems.map((problem) => (
        <tr
          key={problem.id}
          className={`${
            problem.order % 2 == 1
              ? "bg-gray-200 dark:bg-purple-700/5"
              : "bg-gray-50 dark:bg-gray-800"
          } border-b dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-purple-900/30 transition-colors`}
        >
          <td className="px-6 py-2">
            <CircleCheckBig color="#078827" />
          </td>
          <td className="px-6 py-2 font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
            <Link to={`/problems/${problem.id}`} className="hover:underline">
              {problem.title}
            </Link>
          </td>
          <td className={`px-6 py-4 ${getDifficultyColor(problem.difficulty)}`}>
            {problem.difficulty}
          </td>
          <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
            {problem.category}
          </td>
          <td className="px-6 py-2">
            {problem.videoId ? (
              <Link
                to={`https://takeuforward.org/data-structure/${problem.videoId}`}
                target="_blank"
                className="inline-block py-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <Youtube
                  size={32}
                  color="#ff0000"
                  strokeWidth={2}
                  className="hover:scale-110 transition-transform"
                />
              </Link>
            ) : (
              <span className="text-gray-500 dark:text-gray-400">Soon</span>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProblemList;
