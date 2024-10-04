import axios from "axios";
import { useState } from "react";
import InputBox from "../InputBox";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const isCheckbox = e.target.type === "checkbox";
    setFormData({
      ...formData,
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, termsAccepted, ...rest } = formData;
    const dataToSend = {
      ...rest,
      fullName: `${firstName} ${lastName}`,
    };

    if (!termsAccepted) {
      console.error("You must accept the terms and conditions to sign up.");
      return;
    }
    console.log("Data being sent to the backend:", dataToSend);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        dataToSend
      );
      console.log("Account created successfully:", response.data);
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };
  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex justify-center items-center w-full h-screen">
      <div className="w-full max-w-md bg-white h-auto px-6 py-8 rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
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
            />
            <InputBox
              label="Last Name: "
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <InputBox
              label="Username: "
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <InputBox
              label="Email: "
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
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
          <div>
            <div className="flex items-start">
              <input
                id="terms"
                name="termsAccepted"
                aria-describedby="terms"
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required
              />
              <label
                htmlFor="terms"
                className="ml-3 text-sm font-light text-gray-500 dark:text-gray-300"
              >
                I accept the{" "}
                <HoverCard>
                  <HoverCardTrigger>
                    <span className="font-bold text-primary-600 hover:underline text-orange-600 cursor-pointer">
                      Terms and Conditions
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-lg rounded-lg">
                    Here are the terms and conditions you should accept before
                    signing up.
                  </HoverCardContent>
                </HoverCard>
              </label>
            </div>
          </div>
          <Button
            className="rounded-lg bg-orange-600 w-full text-sm"
            type="submit"
          >
            Create an account
            <LogIn className="ml-2" />
          </Button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="#"
              className="font-medium text-orange-600 hover:underline dark:text-primary-500"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
