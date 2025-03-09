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
      // Register the user
      const registerResponse = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/users/register`,
        dataToSend
      );

      // Log the user in after registration
      const loginData = {
        identifier: dataToSend.username,
        password: dataToSend.password,
      };
      const loginResponse = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/users/login`,
        loginData
      );

      // Save user data in Redux and localStorage
      dispatch(login({ userData: loginResponse.data.data }));
      localStorage.setItem("userData", JSON.stringify(loginResponse.data.data));

      // Show success toast with backend message
      showSuccessToast(
        registerResponse.data.message ||
          "Account created and logged in successfully"
      );
      navigate("/");
    } catch (error) {
      // Extract error message from the backend response
      const errorMessage =
        error.response?.data?.message ||
        "Error creating account or logging in. Please try again.";
      showErrorToast(errorMessage);
      console.error("Error creating account or logging in:", error);
    }
  };

  const handleGoogleSignup = async (credentialResponse) => {
    try {
      const jwt = credentialResponse.credential;

      // Decode the JWT to extract user data
      const parts = jwt.split(".");
      const payload = JSON.parse(atob(parts[1]));

      const userData = {
        fullName: payload.name,
        email: payload.email,
        username: payload.given_name,
        googleId: payload.sub, // Use Google's unique ID
      };

      console.log("Decoded Google User Data:", userData);

      // Send decoded user data to backend
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/users/register`,
        userData
      );

      // Save user data in Redux and localStorage
      dispatch(login({ userData: response.data.data }));
      localStorage.setItem("userData", JSON.stringify(response.data.data));

      // Show success toast with backend message
      showSuccessToast(
        response.data.message || "Signed up with Google successfully"
      );
      navigate("/");
    } catch (error) {
      // Extract error message from the backend response
      const errorMessage =
        error.response?.data?.message ||
        "Error signing up with Google. Please try again.";
      showErrorToast(errorMessage);
      console.error("Error signing up with Google:", error);
    }
  };

  return { handleSignup, handleGoogleSignup };
};

export default useSignup;
