const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const port = 3000;
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

server.listen(port, () => {
    console.log(`Server started on port ${port} http://localhost:${port}`);
});

let allMessages = [];

io.on('connection', (socket) => {

    const sendMessageToUsers = (messages) => {
        let localTime = new Date(socket.handshake.time)
        console.log(`user connected: ${localTime.getHours()}:${localTime.getMinutes()} ${localTime.getSeconds()}`);
        socket.emit("sendAll", messages);
        socket.broadcast.emit("sendAll", messages);
    };


    socket.on("message", message => {
        allMessages.push(message);
        console.log(allMessages);
        sendMessageToUsers(allMessages);
    });
})