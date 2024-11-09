import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { login } from "@/store/authSlice";
import {
  showErrorToast,
  showSuccessToast,
} from "@/utils/toast/toastNotifications";

const useSignin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignin = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        { identifier: formData.identifier, password: formData.password }
      );
      dispatch(login({ userData: response.data.data }));
      localStorage.setItem("userData", JSON.stringify(response.data.data));

      showSuccessToast("Logged in successfully!");
      navigate("/");
    } catch (error) {
      showErrorToast("Error logging in. Please try again.");
      console.error("Error logging in:", error);
    }
  };

  return { handleSignin };
};

export default useSignin;
