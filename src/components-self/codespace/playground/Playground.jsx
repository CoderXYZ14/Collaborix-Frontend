import React, { useState } from "react";
import PreferenceNavbar from "./PreferenceNavbar";
import Split from "react-split";
import ReactCodeMirror from "@uiw/react-codemirror";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import EditorFooter from "./EditorFooter";
const Playground = ({ problem }) => {
  const [activeTestCases, setActiveTestCases] = useState(0);
  return (
    <div className="flex flex-col bg-gray-900 relative overflow-x-hidden">
      <PreferenceNavbar />
      <Split
        className=" h-[calc(100vh-95px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <ReactCodeMirror
            value={problem.starterCode}
            theme={vscodeLight}
            extensions={[javascript()]}
            style={{ fontSize: 14 }}
          />
        </div>
        <div className="w-full px-5">
          <div className="flex h-10 items-center space-x-6">
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
              <div className="text-sm font-medium leading-5 text-white">
                Testcases
              </div>
              <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white" />
            </div>
          </div>
          <div className="flex">
            {problem.examples.map((example, index) => (
              <div
                className="mr-2 items-start mt-2 "
                key={example.id}
                onClick={() => setActiveTestCases(index)}
              >
                <div className="flex flex-wrap items-center gap-y-4">
                  <div
                    className={`font-medium items-center transition-all bg-neutral-800 hover:bg-neutral-700 relative rounded-lg px-4 py-1 cursor-pointer 
										text-gray-50
									`}
                  >
                    Case {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" my-4">
            <p className="text-sm font-semibold mt-4 text-gray-50">Input:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-3 bg-neutral-800 border-transparent text-gray-50 mt-2">
              {problem.examples[activeTestCases].inputText}
            </div>
            <p className="text-sm font-semibold mt-4 text-gray-50">Output:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-3 bg-neutral-800 border-transparent text-gray-50 mt-2">
              {problem.examples[activeTestCases].outputText}
            </div>
          </div>
          <EditorFooter />
        </div>
      </Split>
    </div>
  );
};

export default Playground;
