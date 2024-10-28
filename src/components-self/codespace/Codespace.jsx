import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import Playground from "./playground/Playground";

const Codespace = ({ problem, pid }) => {
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription />
      <Playground />
    </Split>
  );
};

export default Codespace;
