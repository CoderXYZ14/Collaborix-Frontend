import assert from "./customAssert.js";
import example from "./images/reverseLL.jpg";

// JS doesn't have a built-in LinkedList class, so we'll create one
class LinkedList {
  value;
  next;

  constructor(value) {
    this.value = value;
    this.next = null;
  }

  reverse() {
    let current = this;
    let prev = null;
    while (current !== null) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev; // Return new head of the reversed list
  }
}

export const reverseLinkedListHandler = (fn) => {
  try {
    const tests = [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3], [1]];
    const answers = [[5, 4, 3, 2, 1], [1, 2, 3, 4, 5], [3, 2, 1], [1]];
    for (let i = 0; i < tests.length; i++) {
      const list = createLinkedList(tests[i]);
      const result = fn(list);
      assert.deepEqual(getListValues(result), answers[i]);
    }
    return true;
  } catch (error) {
    console.log("Error from reverseLinkedListHandler: ", error);
    throw new Error(error);
  }
};

// Helper function to create a linked list from an array
function createLinkedList(values) {
  const head = new LinkedList(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    const node = new LinkedList(values[i]);
    current.next = node;
    current = node;
  }
  return head;
}

// Helper function to get array of values from a linked list
function getListValues(head) {
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }
  return values;
}

const starterCodeReverseLinkedListJS = `
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// Do not edit function name
function reverseLinkedList(head) {
  // Write your code here
};`;

export const reverseLinkedList = {
  id: "reverse-linked-list",
  title: "2. Reverse Linked List",
  problemStatement: `<p>
                Given the 
                <code class="text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 px-1.5 py-0.5 rounded text-sm transition-colors duration-200">
                  head
                </code>
                of a singly linked list, reverse the list, and return
                <em class="text-slate-900 dark:text-slate-200 transition-colors duration-200">the reversed list</em>.
              </p>`,
  examples: [
    {
      id: 0,
      inputText: "head = [1,2,3,4,5]",
      outputText: "[5,4,3,2,1]",
      img: example.src,
      explanation:
        "The linked list is reversed from [1,2,3,4,5] to [5,4,3,2,1].",
    },
    {
      id: 1,
      inputText: "head = [1,2,3]",
      outputText: "[3,2,1]",
      explanation: "The linked list is reversed from [1,2,3] to [3,2,1].",
    },
    {
      id: 2,
      inputText: "head = [1]",
      outputText: "[1]",
      explanation: "A single node remains as is after reversal.",
    },
  ],
  constraints: `<li class='mt-2'>
  <code>0 ≤ Node.count ≤ 5000</code>
</li> <li class='mt-2'>
<code>-5000 ≤ Node.val ≤ 5000</code>
</li>`,
  starterCode: starterCodeReverseLinkedListJS,
  handlerFunction: reverseLinkedListHandler,
  starterFunctionName: "function reverseLinkedList(",
  order: 2,
};
