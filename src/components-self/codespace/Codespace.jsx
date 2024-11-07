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
      console.log("clients" + clients);
      socketRef.current = await initSocket();
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      // const handleUsernameInput = (newUsername) => {
      //   // Check if the newUsername is unique
      //   if (clients.some((client) => client.username === newUsername)) {
      //     // Username is not unique, prompt the user to choose a different one
      //     toast.error(
      //       "Username is already taken, please choose a different one.",
      //       {
      //         position: "top-center",
      //         autoClose: 2000,
      //       }
      //     );
      //   } else {
      //     // Username is unique, set the username
      //     //setUsername(newUsername);
      //   }
      // };

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
          if (username !== joinedUsername) {
            handleUsernameInput(joinedUsername);
          }
          setClients(clients);
        }
      );

      //listing for disconnected
      socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
        toast.info(`${username} left the room`, {
          position: "top-center",
          autoClose: 2000,
        });
        setClients((prev) => {
          return prev.filter((client) => client.socketId !== socketId);
        });
      });
    };
    init();
    //clear listner
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current.off(ACTIONS.JOINED);
        socketRef.current.off(ACTIONS.DISCONNECTED);
      }
    };
  }, [roomId]);

  const handleRoomCreated = (newRoomId) => {
    setRoomId(newRoomId);
    const storedUser = localStorage.getItem("userData");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const storedUsername = parsedUser?.user.username || "";
    console.log(storedUsername);
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
