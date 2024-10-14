import React from "react";
import { CheckCircle, ThumbsDown, ThumbsUp, Star } from "lucide-react";

const ProblemDescription = () => {
  return (
    <div className="bg-[#1a1a1a]">
      {/* TAB */}
      <div className="flex h-11 w-full items-center pt-2 bg-[#282828] text-white overflow-x-hidden">
        <div className="bg-[#1a1a1a] rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer">
          Description
        </div>
      </div>

      <div className="flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto">
        <div className="px-5">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg text-white font-medium">
                1. Two Sum
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div className="text-[#00b8a3] bg-[#00b8a3] inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize">
                Easy
              </div>
              <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-[#00b8a3]">
                <CheckCircle size={22} />
              </div>
              <div className="flex items-center cursor-pointer hover:bg-[#ffffff1a] space-x-1 rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-[#8c8c8c]">
                <ThumbsUp size={18} />
                <span className="text-xs">120</span>
              </div>
              <div className="flex items-center cursor-pointer hover:bg-[#ffffff1a] space-x-1 rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-[#8c8c8c]">
                <ThumbsDown size={18} />
                <span className="text-xs">2</span>
              </div>
              <div className="cursor-pointer hover:bg-[#ffffff1a] rounded p-[3px] ml-4 text-xl transition-colors duration-200 text-[#8c8c8c]">
                <Star size={18} />
              </div>
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className="text-[#eff1f6] text-sm">
              <p className="mt-3">
                Given an array of integers{" "}
                <code className="bg-[#282828] p-1 rounded-md text-[#fff] font-mono">
                  nums
                </code>{" "}
                and an integer{" "}
                <code className="bg-[#282828] p-1 rounded-md text-[#fff] font-mono">
                  target
                </code>
                , return
                <em> indices of the two numbers such that they add up to </em>
                <code className="bg-[#282828] p-1 rounded-md text-[#fff] font-mono">
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
              <div>
                <p className="font-medium text-white">Example 1:</p>
                <div className="example-card">
                  <pre className="bg-[#282828] p-4 mt-2 rounded-lg text-[#eff1f6]">
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
              <div className="mt-4">
                <p className="font-medium text-white">Example 2:</p>
                <div className="example-card">
                  <pre className="bg-[#282828] p-4 mt-2 rounded-lg text-[#eff1f6]">
                    <strong className="text-white">Input: </strong> nums =
                    [3,2,4], target = 6
                    <br />
                    <strong>Output:</strong> [1,2]
                    <br />
                    <strong>Explanation:</strong> Because nums[1] + nums[2] ==
                    6, we return [1, 2].
                  </pre>
                </div>
              </div>

              {/* Example 3 */}
              <div className="mt-4">
                <p className="font-medium text-white">Example 3:</p>
                <div className="example-card">
                  <pre className="bg-[#282828] p-4 mt-2 rounded-lg text-[#eff1f6]">
                    <strong className="text-white">Input: </strong> nums =
                    [3,3], target = 6
                    <br />
                    <strong>Output:</strong> [0,1]
                  </pre>
                </div>
              </div>
            </div>

            {/* Constraints */}
            <div className="my-5">
              <div className="text-white text-sm font-medium">Constraints:</div>
              <ul className="text-[#eff1f6] ml-5 list-disc">
                <li className="mt-2">
                  <code className="bg-[#282828] p-1 rounded-md text-[#fff] font-mono">
                    2 ≤ nums.length ≤ 10⁴
                  </code>
                </li>
                <li className="mt-2">
                  <code className="bg-[#282828] p-1 rounded-md text-[#fff] font-mono">
                    -10⁹ ≤ nums[i] ≤ 10⁹
                  </code>
                </li>
                <li className="mt-2">
                  <code className="bg-[#282828] p-1 rounded-md text-[#fff] font-mono">
                    -10⁹ ≤ target ≤ 10⁹
                  </code>
                </li>
                <li className="mt-2 text-sm">
                  <strong>Only one valid answer exists.</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
