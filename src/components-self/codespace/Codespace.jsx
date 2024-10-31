import Split from "react-split";
import Playground from "./playground/Playground";
import ProblemDescription from "./problem-description/ProblemDescription";

const Codespace = ({ problem }) => {
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription problem={problem} />
      <Playground problem={problem} />
    </Split>
  );
};

export default Codespace;
