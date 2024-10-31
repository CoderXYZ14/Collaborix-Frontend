import customAssert from "./customAssert";

const starterCodeTwoSum = `function twoSum(nums, target){
  // Write your code here
};`;

// Helper function to check if two arrays are equal
const arraysEqual = (a, b) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

// checks if the user has the correct code
const handlerTwoSum = (fn) => {
  try {
    const nums = [
      [2, 7, 11, 15],
      [3, 2, 4],
      [3, 3],
    ];

    const targets = [9, 6, 6];
    const answers = [
      [0, 1],
      [1, 2],
      [0, 1],
    ];

    // Loop through all test cases
    for (let i = 0; i < nums.length; i++) {
      const result = fn(nums[i], targets[i]);

      // Use customAssert to check if arrays are equal
      customAssert.equal(
        arraysEqual(result, answers[i]),
        true,
        `Test case ${i + 1} failed: expected ${answers[i]} but got ${result}`
      );
    }
    return true;
  } catch (error) {
    console.log("twoSum handler function error");
    throw error;
  }
};

export const twoSum = {
  id: "two-sum",
  title: "1. Two Sum",
  problemStatement: `
    <p>Given an array of integers <code class="text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 px-1.5 py-0.5 rounded text-sm transition-colors duration-200">nums</code>
    and an integer <code class="text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 px-1.5 py-0.5 rounded text-sm transition-colors duration-200">target</code>, return
    <em class="text-slate-900 dark:text-slate-200 transition-colors duration-200">indices of the two numbers such that they add up to target</em>.</p>
    <p>You may assume that each input would have <strong class="font-medium text-slate-900 dark:text-slate-200 transition-colors duration-200">exactly one solution</strong>, and you may not use the same element twice.</p>
    <p>You can return the answer in any order.</p>
  `,
  examples: [
    {
      id: 1,
      inputText: "nums = [2,7,11,15], target = 9",
      outputText: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      id: 2,
      inputText: "nums = [3,2,4], target = 6",
      outputText: "[1,2]",
      explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
    },
    {
      id: 3,
      inputText: "nums = [3,3], target = 6",
      outputText: "[0,1]",
    },
  ],
  handlerFunction: handlerTwoSum,
  starterCode: starterCodeTwoSum,
  order: 1,
  starterFunctionName: "function twoSum(",
};
