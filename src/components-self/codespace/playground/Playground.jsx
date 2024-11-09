import { useEffect, useState } from "react";
import Split from "react-split";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { problems } from "@/utils/problems";
import useSubmitProblem from "@/custom-hooks/useSubmitProblem";
import ACTIONS from "@/utils/socket-actions/action";
import {
  CodeEditor,
  EditorFooter,
  PreferenceNavbar,
  TestCases,
} from "./components";

const Playground = ({
  problem,
  setSuccess,
  setSolved,
  roomId,
  socket,
  userCode,
  setUserCode,
}) => {
  const [activeTestCases, setActiveTestCases] = useState(0);
  const isLoggedIn = useSelector((state) => state.auth.status);
  const { pid } = useParams();
  const { submitProblem } = useSubmitProblem(pid, setSolved, setSuccess);

  // console.log(socket);
  // Load code from localStorage on component mount
  useEffect(() => {
    const storedCode = localStorage.getItem(`code-${pid}`);
    console.log("stored code below");
    console.log(storedCode);
    if (storedCode) {
      console.log("updated");
      setUserCode(JSON.parse(storedCode));
      console.log(userCode);
      console.log(storedCode);
      console.log("update done");
    } else {
      console.log("goes here");
      setUserCode(problem.starterCode); // Use starter code from problem prop
    }
  }, []);

  const handleSubmit = async () => {
    if (!isLoggedIn) {
      toast.error("Please login to submit !!", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    try {
      const trimmedCode = userCode.slice(
        userCode.indexOf(problem.starterFunctionName)
      );
      const cb = new Function(`return ${trimmedCode}`)();
      const success = problems[pid].handlerFunction(cb);

      if (success) {
        toast.success("Congrats! All tests passed!", {
          position: "top-center",
          autoClose: 2000,
        });
        await submitProblem();
      }
    } catch (error) {
      if (error.message.startsWith("AssertionError")) {
        toast.error("Oops! One or more test cases failed", {
          position: "top-center",
          autoClose: 2000,
        });
      } else {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
      }
    }
  };

  const onChange = (value) => {
    setUserCode(value);
    localStorage.setItem(`code-${pid}`, JSON.stringify(value));
    if (socket) {
      socket.emit(ACTIONS.CODE_CHANGE, {
        roomId,
        code: value,
      });
    }
  };

  const handleReset = () => {
    setUserCode(problem.starterCode);
    localStorage.removeItem(`code-${pid}`);
    if (socket) {
      socket.emit(ACTIONS.CODE_CHANGE, {
        roomId,
        code: problem.starterCode,
      });
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null) {
          setUserCode(code);
        }
      });
    }

    return () => {
      if (socket) socket.off(ACTIONS.CODE_CHANGE);
    };
  }, [socket, pid]);

  useEffect(() => {
    if (socket && roomId) {
      socket.emit(ACTIONS.SYNC_CODE, {
        roomId,
        code: userCode,
      });
    }
  }, [socket, roomId, userCode]);

  return (
    <div className="flex flex-col bg-gray-900 relative overflow-x-hidden">
      <PreferenceNavbar onReset={handleReset} />
      <Split
        className="h-[calc(100vh-95px)]"
        direction="vertical"
        sizes={[57, 43]}
        minSize={60}
      >
        <CodeEditor userCode={userCode} onChange={onChange} />
        <div className="w-full px-6 py-4">
          <TestCases
            problem={problem}
            activeTestCases={activeTestCases}
            setActiveTestCases={setActiveTestCases}
          />
          <EditorFooter handleSubmit={handleSubmit} />
        </div>
      </Split>
    </div>
  );
};

export default Playground;
