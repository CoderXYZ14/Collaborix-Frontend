import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useSubmitProblem = (pid, userCode, setSolved, setSuccess) => {
  const [loading, setLoading] = useState(false);

  const submitProblem = async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const accessToken = userData?.accessToken;

    if (!accessToken) {
      toast.error("No access token found. Please login.", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:8000/api/v1/problems/submit/${pid}`,
        {},
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.data.success) {
        setSolved(true);
        setSuccess(true);

        // Update local storage with solved problem
        const updatedUserData = JSON.parse(localStorage.getItem("user"));
        if (updatedUserData) {
          updatedUserData.solvedProblemList.push(pid);
          localStorage.setItem("user", JSON.stringify(updatedUserData));
        }
      }
    } catch (error) {
      toast.error("Submission failed: " + error.message, {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
    } finally {
      setLoading(false);
      setSuccess(false);
    }
  };

  return { submitProblem, loading };
};

export default useSubmitProblem;
