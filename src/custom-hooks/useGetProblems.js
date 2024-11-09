import { showErrorToast } from "@/utils/toast/toastNotifications";
import axios from "axios";
import { useEffect, useState } from "react";

const useGetProblems = (setLoading) => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        setLoading(true);

        const userData = JSON.parse(localStorage.getItem("userData"));
        const accessToken = userData?.accessToken;

        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_BACKEND_URL
          }/api/v1/problems/get-questions`,
          {
            withCredentials: true,
            headers: accessToken
              ? { Authorization: `Bearer ${accessToken}` }
              : {},
          }
        );

        setProblems(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);

        showErrorToast("Error fetching questions. Please try again.");
        console.error("Error fetching questions:", error);
        setProblems([]);
      }
    };

    fetchProblems();
  }, [setLoading]);

  return problems;
};
export default useGetProblems;
