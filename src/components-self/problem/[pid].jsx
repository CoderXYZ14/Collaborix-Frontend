import { useParams } from "react-router-dom";
import { problems } from "../../utils/problems/index.js";
import { Codespace } from "../index.js";

const ProblemPage = () => {
  const { pid } = useParams();
  const problem = problems[pid];
  console.log(problem);
  if (!problem) {
    return <div>Problem not found</div>;
  }

  return (
    <div>
      <Codespace problem={problem} pid={pid} />
    </div>
  );
};

export default ProblemPage;
