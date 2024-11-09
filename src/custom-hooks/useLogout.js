import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { logout } from "@/store/authSlice";

const useLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const accessToken = userData?.accessToken;
      if (!accessToken) {
        console.error("No access token found.");
        return;
      }

      await axios.post(
        "http://localhost:8000/api/v1/users/logout",
        {},
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      dispatch(logout());
      localStorage.removeItem("userData");
      localStorage.removeItem("accessToken");

      toast.success("User logged out successfully !!", {
        position: "top-center",
        autoClose: 1000,
      });
    } catch (error) {
      toast.error("Error logging out. Please try again.", {
        position: "top-center",
        autoClose: 1000,
      });
      console.error(
        "Logout failed:",
        error.response?.data?.message || error.message
      );
    }
  };

  return handleLogout;
};

export default useLogout;
