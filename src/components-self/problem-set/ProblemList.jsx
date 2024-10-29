import React from "react";
import { CircleCheckBig, Youtube } from "lucide-react";
import { problems } from "../../dummyProblems/problem.js";
import { Link } from "react-router-dom";

const ProblemList = () => {
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

  return (
    <main className="flex-col justify-center items-center bg-gradient-to-b from-violet-700 to-purple-600 dark:bg-gradient-to-b dark:from-slate-800 from-5% dark:to-purple-800 w-full h-auto pb-20">
      <div className=" px-6 pt-20 pb-12 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-50">
          &ldquo;QUALITY OVER QUANTITY&rdquo; 👇
        </h1>
        <div className="relative overflow-x-auto mx-auto sm:rounded-lg rounded-lg shadow bg-white/80 dark:bg-gray-800/90 dark:border-gray-700 px-6 pb-10 w-full max-w-[1200px]">
          <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400 ">
            <thead className="text-xs text-gray-600 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Difficulty
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Video
                </th>
              </tr>
            </thead>
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
                    <Link
                      to={`/problems/${problem.id}`}
                      className="hover:underline"
                    >
                      {problem.title}
                    </Link>
                  </td>
                  <td
                    className={`px-6 py-4 ${getDifficultyColor(
                      problem.difficulty
                    )}`}
                  >
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
                      <span className="text-gray-500 dark:text-gray-400">
                        Soon
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ProblemList;
