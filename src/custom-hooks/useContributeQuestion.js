import axios from "axios";
import { useNavigate } from "react-router-dom";
import { showSuccessToast } from "@/utils/toast/toastNotifications";

const useContributeQuestion = () => {
  const navigate = useNavigate();

  const submitQuestion = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/problems/add-questions`,
        formData
      );

      showSuccessToast("Question added successfully !!");
      navigate("/");
    } catch (error) {
      showSuccessToast("Error adding question. Please try again.");
      console.error("Error adding question:", error);
    }
  };

  return { submitQuestion };
};

export default useContributeQuestion;
