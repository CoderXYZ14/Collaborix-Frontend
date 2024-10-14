import React from "react";
import { CheckCircle, ThumbsDown, ThumbsUp, Star } from "lucide-react";

const ProblemDescription = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      {/* TAB */}
      <div className="flex h-11 w-full items-center pt-2 bg-black/30 text-white overflow-x-hidden shrink-0">
        <div className="bg-gray-700 rounded-t-sm px-5 py-2.5 text-xs cursor-pointer">
          Description
        </div>
      </div>

      <div className="flex-grow overflow-y-auto">
        <div className="px-5 py-4">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg dark:text-white text-black font-medium">
                1. Two Sum
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div className="text-green-600 bg-green-800 inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize">
                Easy
              </div>
              <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-600">
                <CheckCircle size={22} />
              </div>
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className="text-gray-50 text-sm">
              <p className="mt-3">
                Given an array of integers{" "}
                <code className="bg-neutral-800 px-1 py-0.5 rounded-md text-[#fff] font-mono">
                  nums
                </code>{" "}
                and an integer{" "}
                <code className="bg-neutral-800 px-1 py-0.5 rounded-md text-[#fff] font-mono">
                  target
                </code>
                , return
                <em> indices of the two numbers such that they add up to </em>
                <code className="bg-neutral-800 px-1 py-0.5rounded-md text-[#fff] font-mono">
                  target
                </code>
                .
              </p>
              <p className="mt-3">
                You may assume that each input would have{" "}
                <strong>exactly one solution</strong>, and you may not use the
                same element twice.
              </p>
              <p className="mt-3">You can return the answer in any order.</p>
            </div>

            {/* Examples */}
            <div className="mt-4">
              {/* Example 1 */}
              <div className="mb-3">
                <p className="font-medium text-white">Example 1:</p>
                <div className="example-card">
                  <pre className="bg-neutral-800 p-4 mt-2 rounded-lg text-gray-50 text-sm whitespace-normal break-words">
                    <strong className="text-white">Input: </strong> nums =
                    [2,7,11,15], target = 9
                    <br />
                    <strong>Output:</strong> [0,1]
                    <br />
                    <strong>Explanation:</strong> Because nums[0] + nums[1] ==
                    9, we return [0, 1].
                  </pre>
                </div>
              </div>

              {/* Example 2 */}
              <div className="mb-3">
                <p className="font-medium text-white">Example 1:</p>
                <div className="example-card">
                  <pre className="bg-neutral-800 p-4 mt-2 rounded-lg text-gray-50 text-sm whitespace-normal break-words">
                    <strong className="text-white">Input: </strong> nums =
                    [2,7,11,15], target = 9
                    <br />
                    <strong>Output:</strong> [0,1]
                    <br />
                    <strong>Explanation:</strong> Because nums[0] + nums[1] ==
                    9, we return [0, 1].
                  </pre>
                </div>
              </div>

              {/* Example 3 */}
              <div className="mb-3">
                <p className="font-medium text-white">Example 1:</p>
                <div className="example-card">
                  <pre className="bg-neutral-800 p-4 mt-2 rounded-lg text-gray-50 text-sm whitespace-normal break-words">
                    <strong className="text-white">Input: </strong> nums =
                    [2,7,11,15], target = 9
                    <br />
                    <strong>Output:</strong> [0,1]
                    <br />
                    <strong>Explanation:</strong> Because nums[0] + nums[1] ==
                    9, we return [0, 1].
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
