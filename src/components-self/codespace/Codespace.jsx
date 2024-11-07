import React, { useEffect, useRef, useState } from "react";
import Split from "react-split";
import Playground from "./playground/Playground";
import ProblemDescription from "./problem-description/ProblemDescription";
import Confetti from "react-confetti";
import useWindowSize from "@/custom-hooks/useWindowSize";
import { toast } from "react-toastify";
import { initSocket } from "@/socket/socket";
import ACTIONS from "@/utils/socket-actions/action.js";

const Codespace = ({ problem }) => {
  const { width, height } = useWindowSize();
  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const [clients, setClients] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      function handleErrors(e) {
        console.log("socket error", e);
        toast.error("Socket connection failed, try again later.", {
          position: "top-center",
          autoClose: 2000,
        });
      }

      socketRef.current.emit(ACTIONS.JOIN, { roomId, username });

      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, username: joinedUsername, socketId }) => {
          toast.info(`${joinedUsername} joined the room`, {
            position: "top-center",
            autoClose: 2000,
          });
          setClients(clients);
          console.log(clients);
        }
      );
    };
    init();
  }, [roomId, username]);

  const handleRoomCreated = (newRoomId) => {
    setRoomId(newRoomId);
    const storedUser = localStorage.getItem("userData");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const storedUsername = parsedUser?.user.username || "";
    setUsername(storedUsername);
  };

  return (
    <Split className="split" minSize={0}>
      <ProblemDescription
        problem={problem}
        solved={solved}
        onRoomCreated={handleRoomCreated}
        clients={clients}
      />
      <div>
        <Playground
          problem={problem}
          setSuccess={setSuccess}
          setSolved={setSolved}
          roomId={roomId}
          username={username}
          clients={clients}
          socket={socketRef.current}
        />
        {success && (
          <Confetti
            gravity={0.3}
            tweenDuration={2000}
            width={width}
            height={height}
          />
        )}
      </div>
    </Split>
  );
};

export default Codespace;
