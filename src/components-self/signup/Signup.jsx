import InputBox from "../InputBox";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Signup = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex justify-center items-center w-full h-screen">
      <div className="w-full max-w-md bg-white h-auto px-6 py-8 rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Create an account
        </h1>
        <form className="space-y-4 md:space-y-6">
          <div className="flex justify-between space-x-3">
            <InputBox />
            <InputBox />
          </div>
          <div>
            <InputBox />
          </div>
          <div>
            <InputBox />
          </div>
          <div>
            <InputBox />
          </div>
          <div>
            <div className="flex items-start">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
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
                    <span className="font-bold text-primary-600 hover:underline text-blue-700 cursor-pointer">
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
        </form>
      </div>
    </div>
  );
};

export default Signup;
