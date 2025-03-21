import { io } from "socket.io-client";

export const initSocket = async () => {
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };

  return io(import.meta.env.VITE_APP_BACKEND_SOCKET_URL, options);
  //return an instance of socket client
};
