import Split from "react-split";
import Playground from "./playground/Playground";
import ProblemDescription from "./problem-description/ProblemDescription";
import Confetti from "react-confetti/dist/types/Confetti";

const Codespace = ({ problem }) => {
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription problem={problem} />
      <Playground problem={problem} />
      <Confetti gravity={0.3} tweenDuration={3000} />
    </Split>
  );
};

export default Codespace;
