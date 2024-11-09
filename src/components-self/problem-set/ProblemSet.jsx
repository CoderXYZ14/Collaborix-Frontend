import { useState } from "react";
import LoadingSkeletonProblemList from "../loading-skeleton/LoadingSkeletonProblemList.jsx";
import { ProblemTableHeader, ProblemList } from "./components";

const ProblemSet = () => {
  const [loadingProblems, setLoadingProblem] = useState(true);

  return (
    <main className="flex-col justify-center w-full items-center">
      <div className="px-6 pt-20 pb-12 flex flex-col items-center">
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
            {!loadingProblems && <ProblemTableHeader />}
            <ProblemList setLoading={setLoadingProblem} />
          </table>
        </div>
      </div>
    </main>
  );
};

export default ProblemSet;
