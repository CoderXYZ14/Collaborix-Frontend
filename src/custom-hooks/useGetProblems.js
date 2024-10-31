import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetProblems = (setLoading) => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        // Retrieve user data from localStorage
        const userData = JSON.parse(localStorage.getItem("userData"));
        const accessToken = userData?.accessToken;
        console.log(accessToken);
        // Early return if no access token
        if (!accessToken) {
          setLoading(false);
          return [];
        }

        // Set loading to true before fetch
        setLoading(true);

        // Make API call
        const response = await axios.get(
          "http://localhost:8000/api/v1/problems/get-questions",

          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        console.log(response);
        // Set problems and loading state
        setProblems(response.data.data);
        setLoading(false);

        return response.data.data;
      } catch (error) {
        // Ensure loading is set to false on error
        setLoading(false);

        toast.error("Error fetching questions. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });

        console.error("Error fetching questions:", error);

        // Return empty array on error
        return [];
      }
    };

    fetchProblems();
  }, [setLoading]);

  return problems;
};

export default useGetProblems;
