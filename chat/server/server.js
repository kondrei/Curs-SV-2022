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

io.on('connection', (socket) => {
    console.log(`user connected: ${socket.handshake.time}`);
    socket.on("hello", (arg, callback) => {
        console.log(arg); // "world"
        callback("got it");
    });
})