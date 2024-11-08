import React, { useEffect, useRef, useState } from "react";
import Split from "react-split";
import Playground from "./playground/Playground";
import ProblemDescription from "./problem-description/ProblemDescription";
import Confetti from "react-confetti";
import useWindowSize from "@/custom-hooks/useWindowSize";
import { toast } from "react-toastify";
import { initSocket } from "@/socket/socket";
import ACTIONS from "@/utils/socket-actions/action.js";
import { useDispatch, useSelector } from "react-redux";
const Codespace = ({ problem }) => {
  const { width, height } = useWindowSize();
  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const [clients, setClients] = useState([]);
  const socketRef = useRef(null);
  const [userCode, setUserCode] = useState();

  const handleLeaveRoom = () => {
    if (socketRef.current && roomId) {
      socketRef.current.emit(ACTIONS.LEAVE, { roomId, username });
      setRoomId("");
      setClients([]);
    }
  };

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();

      const handleErrors = (e) => {
        console.error("socket error", e);
        toast.error("Socket connection failed, try again later.", {
          position: "top-center",
          autoClose: 2000,
        });
      };

      // Error handling for socket connection
      socketRef.current.on("connect_error", handleErrors);
      socketRef.current.on("connect_failed", handleErrors);

      // Ensure roomId and username are available before emitting
      if (roomId && username) {
        socketRef.current.emit(ACTIONS.JOIN, { roomId, username });
      }

      // Handle joined event
      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, username: joinedUsername, socketId }) => {
          if (joinedUsername !== username) {
            toast.info(`${joinedUsername} joined the room`, {
              position: "top-center",
              autoClose: 2000,
            });
          }

          setClients(clients);
        }
      );

      socketRef.current.on(
        ACTIONS.DISCONNECTED,
        ({ socketId, username: leftUsername }) => {
          toast.info(`${leftUsername} left the room`, {
            position: "top-center",
            autoClose: 2000,
          });
          setClients((prevClients) => {
            const updatedClients = prevClients.filter(
              (client) => client.socketId !== socketId
            );
            console.log("Clients after DISCONNECTED event:", updatedClients);
            return updatedClients;
          });
        }
      );

      //leave room
      socketRef.current.on(
        ACTIONS.LEAVE,
        ({ socketId, username: leftUsername }) => {
          toast.info(`${leftUsername} left the room`, {
            position: "top-center",
            autoClose: 2000,
          });

          setClients((prevClients) => {
            const updatedClients = prevClients.filter(
              (client) => client.socketId !== socketId
            );
            console.log("Clients after LEAVE event:", updatedClients);
            return updatedClients;
          });
        }
      );
    };

    init();
    //clear listner
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current.off(ACTIONS.JOINED);
        socketRef.current.off(ACTIONS.DISCONNECTED);
        socketRef.current.off(ACTIONS.LEAVE);
      }
    };
  }, [roomId]);

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
        onLeaveRoom={handleLeaveRoom}
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
          setUserCode={setUserCode}
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
