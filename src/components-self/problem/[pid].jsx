import { useParams } from "react-router-dom";
import { problems } from "../../utils/problems/index.js";
import { Codespace } from "../index.js";
import ProblemNotFound from "./components/ProblemNotFound.jsx";

const ProblemPage = () => {
  const { pid } = useParams();
  const problem = problems[pid];

  return problem ? (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-purple-900 to-purple-950">
      <Codespace problem={problem} />
    </div>
  ) : (
    <ProblemNotFound />
  );
};

export default ProblemPage;
