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
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/users/login`,
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

  const handleGoogleSignin = async (credentialResponse) => {
    try {
      // const response = await axios.post(
      //   `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/users/google-login`,
      //   { credential: credentialResponse.credential }
      // );

      // dispatch(login({ userData: response.data.data }));
      // localStorage.setItem("userData", JSON.stringify(response.data.data));

      showSuccessToast("Logged in with Google successfully!");
      navigate("/");
    } catch (error) {
      showErrorToast("Error logging in with Google. Please try again.");
      console.error("Error logging in with Google:", error);
    }
  };

  return { handleSignin, handleGoogleSignin };
};

export default useSignin;
