import ReactCodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";

const CodeEditor = ({ userCode, onChange }) => {
  return (
    <div className="w-full overflow-auto">
      <ReactCodeMirror
        value={userCode}
        theme={vscodeDark}
        onChange={onChange}
        extensions={[javascript()]}
        style={{ fontSize: 14 }}
      />
    </div>
  );
};

export default CodeEditor;
