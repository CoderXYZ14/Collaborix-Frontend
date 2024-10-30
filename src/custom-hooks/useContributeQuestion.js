import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useContributeQuestion = () => {
  const navigate = useNavigate();

  const submitQuestion = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/problems/add-questions",
        formData
      );

      toast.success("Question added successfully !!", {
        position: "top-center",
        autoClose: 3000,
      });
      navigate("/");
    } catch (error) {
      toast.error("Error adding question. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
      console.error("Error adding question:", error);
    }
  };

  return { submitQuestion };
};

export default useContributeQuestion;
