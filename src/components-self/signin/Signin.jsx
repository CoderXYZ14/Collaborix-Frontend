import axios from "axios";
import { useState } from "react";
import InputBox from "../InputBox";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice.js";
import { toast } from "react-toastify";

const Signin = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        { identifier: formData.identifier, password: formData.password }
      );
      console.log("User logged in successfully:", response.data.data);
      dispatch(login({ userData: response.data.data }));
      localStorage.setItem("userData", JSON.stringify(response.data.data));

      toast.success("Logged in successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      navigate("/");
    } catch (error) {
      toast.error("Error logging in. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex justify-center items-center w-full h-screen">
      <div className="w-full max-w-md bg-white h-auto px-6 py-8 rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Login to your account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <InputBox
              label="Username / Email: "
              type="text"
              name="identifier"
              placeholder="Username / Email"
              value={formData.identifier}
              onChange={handleChange}
            />
          </div>

          <div>
            <InputBox
              label="Password: "
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <Button
            className="rounded-lg bg-orange-600 w-full text-sm"
            type="submit"
          >
            Login
            <LogIn className="ml-2" />
          </Button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Create an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-orange-600 hover:underline dark:text-primary-500"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
