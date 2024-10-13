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
    <main className="flex-col justify-center items-center  dark:bg-gray-900 w-full h-screen">
      <div className="w-full  h-auto px-6 py-8 r ">
        <h1 className="text-3xl font-bold text-center mb-8">
          &ldquo;QUALITY OVER QUANTITY&rdquo;
        </h1>
        <div className="relative overflow-x-auto mx-auto sm:rounded-lg rounded-lg shadow  dark:border-gray-700 px-6 pb-10 flex justify-center items-center">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-[1200px]">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                      ? "dark:bg-gray-800/5"
                      : "dark:bg-gray-800"
                  } bg-white border-b  dark:border-gray-700 `}
                >
                  <td className="px-6 py-4">
                    <CircleCheckBig color="#078827" />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    <Link
                      to={`/problem/${problem.id}`}
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
                  <td className="px-6 py-4">{problem.category}</td>
                  <td className="px-6 py-4">
                    {problem.videoId ? (
                      <Link
                        to={`https://takeuforward.org/data-structure/${problem.videoId}`}
                        target="_blank"
                      >
                        <Youtube
                          size={32}
                          color="#ff0000"
                          strokeWidth={2.25}
                          className="hover:scale-110 transition-transform"
                        />
                      </Link>
                    ) : (
                      <span className="text-gray-400">Soon</span>
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
