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
    let localTime = new Date(socket.handshake.time)
    console.log(`user connected: ${localTime.getHours()}:${localTime.getMinutes()} ${localTime.getSeconds()}`);

    const sendMessageToUsers = (messages) => {
        let test = 'haha';
        socket.emit("sendAll", messages);
        socket.broadcast.emit("sendAll", messages, test);
    };


    socket.on("message", message => {
        allMessages.push(message);
        sendMessageToUsers(allMessages);
    });
})