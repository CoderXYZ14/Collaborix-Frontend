import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "@/store/authSlice";
import {
  showErrorToast,
  showSuccessToast,
} from "@/utils/toast/toastNotifications";

const useSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    const { firstName, lastName, ...rest } = formData;
    const dataToSend = {
      ...rest,
      fullName: `${firstName} ${lastName}`,
    };

    try {
      const registerResponse = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        dataToSend
      );

      const loginData = {
        identifier: dataToSend.username,
        password: dataToSend.password,
      };
      const loginResponse = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/users/login`,
        loginData
      );

      dispatch(login({ userData: loginResponse.data.data }));
      localStorage.setItem("userData", JSON.stringify(loginResponse.data.data));

      showSuccessToast("Account created and logged in successfully");
      navigate("/");
    } catch (error) {
      showErrorToast("Error creating account or logging in. Please try again.");
      console.error("Error creating account or logging in:", error);
    }
  };

  return { handleSignup };
};

export default useSignup;
