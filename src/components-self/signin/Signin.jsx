import axios from "axios";
import { useState } from "react";
import InputBox from "../InputBox";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LogIn, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice.js";

const Signin = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const dispatch = useDispatch();

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
      console.log("User logged in successfully:", response.data);
      dispatch(login({ userData: response.data.user }));
      localStorage.setItem("userData", JSON.stringify(response.data.user));
      setAlert({
        show: true,
        message: "Logged in successfully!",
        type: "success",
      });
    } catch (error) {
      setAlert({
        show: true,
        message: "Error logging in. Please try again.",
        type: "error",
      });
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex justify-center items-center w-full h-screen">
      <div className="w-full max-w-md bg-white h-auto px-6 py-8 rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        {alert.show && (
          <Alert
            className={alert.type === "error" ? "bg-red-400" : "bg-green-500"}
          >
            <Terminal className="h-4 w-4" />
            <AlertTitle>
              {alert.type === "error" ? "Error" : "Success"}
            </AlertTitle>
            <AlertDescription>{alert.message}</AlertDescription>
          </Alert>
        )}
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
