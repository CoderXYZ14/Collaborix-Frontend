import { useEffect, useState } from "react";
import axios from "axios";

const useProblemSolvedStatus = (problemId) => {
  const [isSolved, setIsSolved] = useState(null);

  useEffect(() => {
    const checkProblemSolvedStatus = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("userData"));
        const accessToken = userData?.accessToken;
        if (!accessToken) return;

        const response = await axios.post(
          `${VITE_APP_BACKEND_URL}/api/v1/problems/solved-status/${problemId}`,
          {},
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        if (response.data.success) {
          setIsSolved(response.data.data.solved);
        } else {
          setIsSolved(false);
        }
      } catch (error) {
        console.error("Error checking problem solved status:", error);
        setIsSolved(false);
      }
    };

    checkProblemSolvedStatus();
  }, [problemId]);

  return isSolved;
};

export default useProblemSolvedStatus;
