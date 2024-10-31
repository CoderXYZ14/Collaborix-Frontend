import { problems } from "@/utils/problems";
import { useNavigate, useParams } from "react-router-dom";

const useHandleProblemChange = () => {
  const { pid } = useParams();
  const navigate = useNavigate();

  const handleProblemChange = (isForward) => {
    const { order } = problems[pid];
    const direction = isForward ? 1 : -1;
    const nextProblemOrder = order + direction;
    const nextProblemKey = Object.keys(problems).find(
      (key) => problems[key].order === nextProblemOrder
    );

    if (isForward && !nextProblemKey) {
      const firstProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === 1
      );
      navigate(`/problems/${firstProblemKey}`);
    } else if (!isForward && !nextProblemKey) {
      const lastProblemKey = Object.keys(problems).find(
        (key) => problems[key].order === Object.keys(problems).length
      );
      navigate(`/problems/${lastProblemKey}`);
    } else {
      navigate(`/problems/${nextProblemKey}`);
    }
  };

  return handleProblemChange;
};

export default useHandleProblemChange;
