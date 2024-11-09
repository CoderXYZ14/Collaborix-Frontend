import { useState } from "react";
import InputBox from "../InputBox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import useSignup from "@/custom-hooks/useSignup";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    termsAccepted: false,
  });
  const { handleSignup } = useSignup();

  const handleChange = (e) => {
    const isCheckbox = e.target.type === "checkbox";
    setFormData({
      ...formData,
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(formData);
  };

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Sign Up for Your{" "}
          <span className="text-violet-600 dark:text-violet-400">Account</span>
        </h1>
      </div>
      <Card className="w-full max-w-md border-none shadow-lg bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <CardContent className="px-6 py-8">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-between space-x-3">
              <InputBox
                label="First Name: "
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-white/70 dark:bg-slate-800/70"
              />
              <InputBox
                label="Last Name: "
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-white/70 dark:bg-slate-800/70"
              />
            </div>

            <InputBox
              label="Username: "
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="bg-white/70 dark:bg-slate-800/70"
            />

            <InputBox
              label="Email: "
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white/70 dark:bg-slate-800/70"
            />

            <InputBox
              label="Password: "
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className="bg-white/70 dark:bg-slate-800/70"
            />

            <div>
              <div className="flex items-start">
                <input
                  id="terms"
                  name="termsAccepted"
                  aria-describedby="terms"
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-violet-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-violet-600 dark:ring-offset-gray-800"
                  required
                />
                <label
                  htmlFor="terms"
                  className="ml-3 text-sm font-light text-slate-600 dark:text-slate-300"
                >
                  I accept the{" "}
                  <HoverCard>
                    <HoverCardTrigger>
                      <span className="font-medium text-violet-600 dark:text-violet-400 hover:underline cursor-pointer">
                        Terms and Conditions
                      </span>
                    </HoverCardTrigger>
                    <HoverCardContent className="p-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-600 shadow-lg rounded-lg">
                      Here are the terms and conditions you should accept before
                      signing up.
                    </HoverCardContent>
                  </HoverCard>
                </label>
              </div>
            </div>
            <Button
              className="w-full bg-violet-600 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700 text-white"
              type="submit"
            >
              Create an account
              <LogIn className="ml-2" />
            </Button>
            <p className="text-sm font-light text-slate-600 dark:text-slate-300">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-medium text-violet-600 dark:text-violet-400 hover:underline"
              >
                Login here
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
