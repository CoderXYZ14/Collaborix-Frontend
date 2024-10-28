import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import Playground from "./playground/Playground";

const Codespace = ({ problem }) => {
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription problem={problem} />
      <Playground />
    </Split>
  );
};

export default Codespace;
