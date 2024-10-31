import React, { useState } from "react";
import PreferenceNavbar from "./PreferenceNavbar";
import Split from "react-split";
import ReactCodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import EditorFooter from "./EditorFooter";
import { useSelector } from "react-redux";

const Playground = ({ problem }) => {
  const [activeTestCases, setActiveTestCases] = useState(0);
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="flex flex-col bg-gray-900 relative overflow-x-hidden">
      <PreferenceNavbar />
      <Split
        className="h-[calc(100vh-95px)]"
        direction="vertical"
        sizes={[57, 43]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <ReactCodeMirror
            value={problem.starterCode}
            theme={vscodeDark}
            extensions={[javascript()]}
            style={{ fontSize: 14 }}
          />
        </div>
        <div className="w-full px-6 py-4">
          <div className="flex h-10 items-center space-x-6">
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
              <div className="text-sm font-medium text-slate-100 transition-colors duration-200">
                Testcases
              </div>
              <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-violet-500 transition-colors duration-200" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {problem.examples.map((example, index) => (
              <button
                key={example.id}
                onClick={() => setActiveTestCases(index)}
                className={`font-medium transition-all rounded-full px-2.5 py-1 text-xs
                  ${
                    activeTestCases === index
                      ? "bg-purple-200 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400"
                      : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  } transition-colors duration-200`}
              >
                Case {index + 1}
              </button>
            ))}
          </div>

          <div className="space-y-4 mt-4">
            <div>
              <h3 className="text-sm font-medium text-slate-100 transition-colors duration-200">
                Input:
              </h3>
              <div className="rounded-lg bg-slate-900/50 border border-slate-800 transition-all duration-200 mt-2">
                <div className="p-4 space-y-2 font-mono text-xs">
                  <div className="text-slate-300 transition-colors duration-200">
                    {problem.examples[activeTestCases].inputText}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-slate-100 transition-colors duration-200">
                Output:
              </h3>
              <div className="rounded-lg bg-slate-900/50 border border-slate-800 transition-all duration-200 mt-2">
                <div className="p-4 space-y-2 font-mono text-xs">
                  <div className="text-slate-300 transition-colors duration-200">
                    {problem.examples[activeTestCases].outputText}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <EditorFooter />
        </div>
      </Split>
    </div>
  );
};

export default Playground;
