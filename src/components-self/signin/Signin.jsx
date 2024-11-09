import axios from "axios";
import { useState } from "react";
import InputBox from "../InputBox";
import { Button } from "@/components/ui/button";
import { LogIn, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice.js";
import { toast } from "react-toastify";
import { Card, CardContent } from "@/components/ui/card";

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
    <div className="min-h-screen bg-gradient-to-b from-violet-200 from-10% to-purple-100 dark:from-slate-800 dark:to-purple-800 transition-colors duration-200 flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Sign In to Your{" "}
          <span className="text-violet-600 dark:text-violet-400">Account</span>
        </h1>
      </div>
      <Card className="w-full max-w-md border-none shadow-lg bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <CardContent className="px-6 py-8">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
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
                className="bg-white/70 dark:bg-slate-800/70"
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
                className="bg-white/70 dark:bg-slate-800/70"
              />
            </div>

            <Button
              className="w-full bg-violet-600 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700 text-white"
              type="submit"
            >
              Login
              <LogIn className="ml-2" />
            </Button>
            <p className="text-sm font-light text-slate-600 dark:text-slate-300">
              Create an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-violet-600 dark:text-violet-400 hover:underline"
              >
                Register here
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signin;
