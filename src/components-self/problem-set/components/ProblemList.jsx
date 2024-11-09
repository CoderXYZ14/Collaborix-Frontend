import { CircleCheckBig, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import useGetProblems from "@/custom-hooks/useGetProblems";
import useGetDifficultyColor from "@/custom-hooks/useGetDifficultyColor";

const ProblemList = ({ setLoading }) => {
  const problems = useGetProblems(setLoading);

  return (
    <tbody>
      {problems.map((problem) => {
        const difficultyColor = useGetDifficultyColor(
          problem.difficulty
        ).textColor;

        return (
          <tr
            key={problem.id}
            className={`${
              problem.order % 2 === 1
                ? "bg-gray-200 dark:bg-purple-700/5"
                : "bg-gray-50 dark:bg-gray-800"
            } border-b dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-purple-900/30 transition-colors`}
          >
            <td className="px-6 py-2">
              {problem.submitted && (
                <CircleCheckBig color="#078827" size={24} className="mx-auto" />
              )}
            </td>
            <td className="px-6 py-2 font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
              <Link to={`/problems/${problem.id}`} className="hover:underline">
                {problem.title}
              </Link>
            </td>
            <td className={`px-6 py-4 ${difficultyColor}`}>
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
        );
      })}
    </tbody>
  );
};

export default ProblemList;
