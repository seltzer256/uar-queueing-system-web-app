import { io } from "socket.io-client";

const socket = io(`${process.env.NEXT_PUBLIC_LOCAL_API}`, {
  autoConnect: false,
});

export default socket;
