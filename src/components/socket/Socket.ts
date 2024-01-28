import { io, Socket } from "socket.io-client";
const URL = "https://server.eduvista.site/";

export const socket: Socket = io(URL);
