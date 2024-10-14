import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";

const Codespace = () => {
  return (
    <Split className="split">
      <ProblemDescription />
      <div>The code editor will be here</div>
    </Split>
  );
};

export default Codespace;
