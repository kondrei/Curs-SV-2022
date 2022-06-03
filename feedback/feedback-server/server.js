import express from "express";
const app = express();
import http from "http";
import { Server } from "socket.io";
import StickyNotes from "./StickyNotes.js";

const port = 3001;
const server = http.createServer(app);
const io = new Server(server);

server.listen(port, () => {
    console.log(`Server started on port ${port} http://localhost:${port}`);
});


let allNotes = new StickyNotes(3);

io.on('connection', (socket) => {
    console.log('New user conected');
    socket.emit("sendGridIds", allNotes.notes);



    socket.on("sendFeedback", feedback => {
        allNotes.updateNote(1, 1, feedback);
        socket.emit("sendGridIds", allNotes.notes);
        console.log(allNotes.notes)
    });
})