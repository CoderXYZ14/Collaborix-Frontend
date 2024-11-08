import React, { useEffect, useRef, useState } from "react";
import Split from "react-split";
import { useLocation, useParams } from "react-router-dom"; // Changed to React Router
import Playground from "./playground/Playground";
import ProblemDescription from "./problem-description/ProblemDescription";
import Confetti from "react-confetti";
import useWindowSize from "@/custom-hooks/useWindowSize";
import { toast } from "react-toastify";
import { initSocket } from "@/socket/socket";
import ACTIONS from "@/utils/socket-actions/action.js";
import { useDispatch, useSelector } from "react-redux";

const Codespace = ({ problem }) => {
  const location = useLocation();
  const { width, height } = useWindowSize();
  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const [clients, setClients] = useState([]);
  const socketRef = useRef(null);
  const [userCode, setUserCode] = useState(problem.starterCode);
  const previousProblemId = useRef(problem.id);
  const [isConnected, setIsConnected] = useState(false);

  const handleLeaveRoom = () => {
    if (socketRef.current && roomId) {
      socketRef.current.emit(ACTIONS.LEAVE, { roomId, username });
      socketRef.current.disconnect();
      socketRef.current = null;
      setRoomId("");
      setClients([]);
      setIsConnected(false);
    }
  };

  // Effect to handle location/problem changes
  useEffect(() => {
    // If problem ID changed or URL changed, cleanup previous connection
    if (previousProblemId.current !== problem.id || location.pathname) {
      handleLeaveRoom();
      // Reset states for new problem
      setUserCode(problem.starterCode);
      setSolved(false);
      setSuccess(false);
    }
    previousProblemId.current = problem.id;
  }, [location.pathname, problem.id]);

  useEffect(() => {
    const init = async () => {
      if (socketRef.current) {
        handleLeaveRoom();
      }

      socketRef.current = await initSocket();
      setIsConnected(true);

      const handleErrors = (e) => {
        console.error("socket error", e);
        setIsConnected(false);
        toast.error("Socket connection failed, try again later.", {
          position: "top-center",
          autoClose: 2000,
        });
      };

      socketRef.current.on("connect_error", handleErrors);
      socketRef.current.on("connect_failed", handleErrors);

      if (roomId && username) {
        socketRef.current.emit(ACTIONS.JOIN, { roomId, username });

        if (userCode) {
          socketRef.current.emit(ACTIONS.SYNC_CODE, { code: userCode });
        }
      }

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

          if (userCode) {
            socketRef.current.emit(ACTIONS.SYNC_CODE, {
              code: userCode,
              socketId,
            });
          }
        }
      );

      socketRef.current.on(
        ACTIONS.DISCONNECTED,
        ({ socketId, username: leftUsername }) => {
          toast.info(`${leftUsername} left the room`, {
            position: "top-center",
            autoClose: 2000,
          });
          setClients((prevClients) =>
            prevClients.filter((client) => client.socketId !== socketId)
          );
        }
      );

      socketRef.current.on(
        ACTIONS.LEAVE,
        ({ socketId, username: leftUsername }) => {
          toast.info(`${leftUsername} left the room`, {
            position: "top-center",
            autoClose: 2000,
          });
          setClients((prevClients) =>
            prevClients.filter((client) => client.socketId !== socketId)
          );
          setIsConnected(false);
        }
      );
    };

    if (roomId && username) {
      init();
    }

    return () => {
      handleLeaveRoom();
    };
  }, [roomId, username]);

  // Listen for code changes and sync
  useEffect(() => {
    if (socketRef.current && userCode && roomId) {
      socketRef.current.emit(ACTIONS.SYNC_CODE, { code: userCode });
    }
  }, [userCode, roomId]);

  // Listen for incoming code syncs
  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on(ACTIONS.SYNC_CODE, ({ code }) => {
        setUserCode(code);
      });
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.off(ACTIONS.SYNC_CODE);
      }
    };
  }, []);

  const handleRoomCreated = (newRoomId) => {
    setRoomId(newRoomId);
    const storedUser = localStorage.getItem("userData");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const storedUsername = parsedUser?.user.username || "";
    setUsername(storedUsername);
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      handleLeaveRoom();
    };
  }, []);

  return (
    <Split className="split" minSize={0}>
      <ProblemDescription
        problem={problem}
        solved={solved}
        onRoomCreated={handleRoomCreated}
        onLeaveRoom={handleLeaveRoom}
        clients={clients}
        isConnected={isConnected}
      />
      <div>
        <Playground
          problem={problem}
          setSuccess={setSuccess}
          setSolved={setSolved}
          roomId={roomId}
          clients={clients}
          socket={socketRef.current}
          userCode={userCode}
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
