import assert from "./customAssert.js";
const starterCodeTwoSum = `function twoSum(nums,target){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerTwoSum = (fn) => {
  // fn is the callback that user's code is passed into
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

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i], targets[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    console.log("twoSum handler function error");
    throw new Error(error);
  }
};

export const twoSum = {
  id: "two-sum",
  title: "1. Two Sum",
  problemStatement: ` <p>
                Given an array of integers
                <code class="text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 px-1.5 py-0.5 rounded text-sm transition-colors duration-200">
                  nums
                </code>
                and an integer
                <code class="text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 px-1.5 py-0.5 rounded text-sm transition-colors duration-200">
                  target
                </code>
            , return
                <em class="text-slate-900 dark:text-slate-200 transition-colors duration-200">
                  indices of the two numbers such that they add up to target
                </em>
                .
              </p>
              <p>
                You may assume that each input would have
                <strong class="font-medium text-slate-900 dark:text-slate-200 transition-colors duration-200">
                  exactly one solution
                </strong>
                , and you may not use the same element twice.
              </p>
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
      inputText: " nums = [3,3], target = 6",
      outputText: "[0,1]",
    },
  ],
  constraints: `<li class='mt-2'>
  <code>2 ≤ nums.length ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ nums[i] ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ target ≤ 10</code>
</li>
<li class='mt-2 text-sm'>
<strong>Only one valid answer exists.</strong>
</li>`,
  handlerFunction: handlerTwoSum,
  starterCode: starterCodeTwoSum,
  order: 1,
  starterFunctionName: "function twoSum(",
};
