import { useParams } from "react-router-dom";
import { problems } from "../../utils/problems/index.js";
import { Codespace } from "../index.js";
import ProblemNotFound from "./components/ProblemNotFound.jsx";

const ProblemPage = () => {
  const { pid } = useParams();
  const problem = problems[pid];

  return problem ? <Codespace problem={problem} /> : <ProblemNotFound />;
};

export default ProblemPage;
