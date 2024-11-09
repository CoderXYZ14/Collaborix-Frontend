const ProblemTableHeader = () => {
  return (
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
  );
};

export default ProblemTableHeader;
