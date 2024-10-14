import React from "react";
import PreferenceNavbar from "./PreferenceNavbar";
import Split from "react-split";
import ReactCodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
const Playground = () => {
  return (
    <div className="flex flex-col bg-gray-700 relative">
      <PreferenceNavbar />
      <Split
        className=" h-[calc(100vh-95px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <ReactCodeMirror
            value="const a=1"
            theme={vscodeDark}
            extensions={[javascript()]}
            style={{ fontSize: 16 }}
          />
        </div>
        <div>Test cases</div>
      </Split>
    </div>
  );
};

export default Playground;
