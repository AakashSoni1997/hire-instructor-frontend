import { io } from "socket.io-client";
import { getUserSettings } from "../../Utils/Function";

const SOCKET_URL = "https://admin-hireinstructor.sandboxdevelopment.in:4010"

export const socket = io(SOCKET_URL);

export const socketDisconnect = () => {
    socket.disconnect();
};

export const sendUserIDToBackend = () => {
    socket.emit("saveSocketId", getUserSettings().user.id)
};

export const removeSocketAllListeners = () => {
    socket.removeAllListeners();
};

export const socketConnection = () => {
    socket.connect()
};