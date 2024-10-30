import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetProblems = (setLoading) => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8000/api/v1/problems/get-questions"
        );
        setProblems(response.data.data);
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching question. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
        console.error("Error fetching questions:", error);
      }
    };

    fetchProblems();
  }, [setLoading]);

  return problems;
};

export default useGetProblems;
