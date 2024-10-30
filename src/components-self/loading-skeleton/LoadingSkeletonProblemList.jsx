const LoadingSkeletonProblemList = () => {
  return (
    <div className="flex items-center space-x-12 mt-4 px-6 bg-white/80 dark:bg-gray-800/90 py-4 rounded-lg">
      <div className="w-6 h-6 shrink-0 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
      <div className="h-4 sm:w-52 w-32 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
      <div className="h-4 sm:w-52 w-32 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
      <div className="h-4 sm:w-52 w-32 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
      <div className="w-8 h-8 shrink-0 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSkeletonProblemList;
