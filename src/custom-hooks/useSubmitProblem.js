import { useState } from "react";
import axios from "axios";
import { showErrorToast } from "@/utils/toast/toastNotifications";

const useSubmitProblem = (pid, setSolved, setSuccess) => {
  const [loading, setLoading] = useState(false);

  const submitProblem = async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const accessToken = userData?.accessToken;

    if (!accessToken) {
      showErrorToast("No access token found. Please login.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${VITE_APP_BACKEND_URL}/api/v1/problems/submit/${pid}`,
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
        const solvedProblemList = userData?.user?.solvedProblemList || [];
        if (!solvedProblemList.includes(response.data.data._id)) {
          const updatedUserData = { ...userData };
          updatedUserData.user.solvedProblemList.push(response.data.data._id);
          localStorage.setItem("userData", JSON.stringify(updatedUserData));
        }
      }
    } catch (error) {
      showErrorToast("Submission failed: " + error.message);
    } finally {
      setLoading(false);
      setSuccess(false);
    }
  };

  return { submitProblem, loading };
};

export default useSubmitProblem;
