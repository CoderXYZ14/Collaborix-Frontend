import React, { useState } from "react";

import LoadingSkeletonProblemList from "../loading-skeleton/LoadingSkeletonProblemList.jsx";
import ProblemList from "./ProblemList.jsx";

const ProblemSet = () => {
  const [loadingProblems, setLoadingProblem] = useState(true);

  return (
    <main className="flex-col justify-center items-center bg-gradient-to-b from-violet-700 to-purple-600 dark:bg-gradient-to-b dark:from-slate-800 from-5% dark:to-purple-800 w-full h-screen pb-20">
      <div className=" px-6 pt-20 pb-12 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-50">
          &ldquo;QUALITY OVER QUANTITY&rdquo; 👇
        </h1>
        <div className="relative overflow-x-auto mx-auto sm:rounded-lg rounded-lg shadow bg-white/80 dark:bg-gray-800/90 dark:border-gray-700 px-6 pb-10 w-full max-w-[1200px]">
          {loadingProblems && (
            <div className="max-w-[1200px] w-full animate-pulse">
              {Array.from({ length: 10 }, (_, idx) => (
                <LoadingSkeletonProblemList key={idx} />
              ))}
            </div>
          )}
          <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400 ">
            {!loadingProblems && (
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
            )}
            <ProblemList setLoading={setLoadingProblem} />
          </table>
        </div>
      </div>
    </main>
  );
};

export default ProblemSet;
