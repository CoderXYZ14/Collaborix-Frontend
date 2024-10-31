import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetProblems = (setLoading) => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        setLoading(true);

        // Get user data if available
        const userData = JSON.parse(localStorage.getItem("userData"));
        const accessToken = userData?.accessToken;

        // Make API call with or without token
        const response = await axios.get(
          "http://localhost:8000/api/v1/problems/get-questions",
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

        toast.error("Error fetching questions. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });

        console.error("Error fetching questions:", error);
        setProblems([]); // Set empty array on error
      }
    };

    fetchProblems();
  }, [setLoading]);

  return problems;
};
export default useGetProblems;
