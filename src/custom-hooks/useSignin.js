import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import axios from "axios";
import { login } from "@/store/authSlice";

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

      toast.success("Logged in successfully!", {
        position: "top-center",
        autoClose: 1000,
      });
      navigate("/");
    } catch (error) {
      toast.error("Error logging in. Please try again.", {
        position: "top-center",
        autoClose: 1000,
      });
      console.error("Error logging in:", error);
    }
  };

  return { handleSignin };
};

export default useSignin;
