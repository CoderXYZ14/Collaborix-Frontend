import Split from "react-split";
import Playground from "./playground/Playground";
import ProblemDescription from "./problem-description/ProblemDescription";
import Confetti from "react-confetti";
import useWindowSize from "@/custom-hooks/useWindowSize";
import { useState } from "react";

const Codespace = ({ problem }) => {
  const { width, height } = useWindowSize();
  const [success, setSuccess] = useState(false);
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription problem={problem} />
      <div>
        <Playground problem={problem} />
        {success && (
          <Confetti
            gravity={0.3}
            tweenDuration={2000}
            width={width}
            height={height}
          />
        )}
      </div>
    </Split>
  );
};

export default Codespace;
