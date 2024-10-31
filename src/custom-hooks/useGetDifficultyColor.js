const useGetDifficultyColor = (difficulty) => {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return {
        textColor: "text-green-600",
        bgColor: "bg-green-100 dark:bg-green-950/30",
      };
    case "medium":
      return {
        textColor: "text-yellow-600",
        bgColor: "bg-yellow-100 dark:bg-yellow-950/30",
      };
    case "hard":
      return {
        textColor: "text-red-600",
        bgColor: "bg-red-100 dark:bg-red-950/30",
      };
    default:
      return {
        textColor: "text-gray-600",
        bgColor: "bg-gray-100 dark:bg-gray-950/30",
      };
  }
};

export default useGetDifficultyColor;
