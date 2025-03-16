import { useState } from "react";
import InputBox from "../InputBox";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import useSignin from "@/custom-hooks/useSignin";
import { GoogleLogin } from "@react-oauth/google";

const Signin = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const { handleSignin, handleGoogleSignin } = useSignin();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignin(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center">
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

          {/* <div className="mb-6">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                handleGoogleSignin(credentialResponse);
              }}
              onError={() => {
                console.log("Google Sign-In Failed");
              }}
              size="large"
              width="100%"
              text="signin_with"
            />
          </div> */}

          {/* Divider */}
          {/* <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300 dark:border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white/50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400">
                Or continue with
              </span>
            </div>
          </div> */}

          {/* Regular Sign-In Form */}
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <InputBox
              label="Username / Email: "
              type="text"
              name="identifier"
              placeholder="Username / Email"
              value={formData.identifier}
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
