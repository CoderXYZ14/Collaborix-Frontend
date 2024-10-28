import { useParams } from "react-router-dom";
import { problems } from "../utils/problems";
import Codespace from "./codespace/Codespace";

const ProblemPage = () => {
  const { pid } = useParams();
  const problem = problems[pid];

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
