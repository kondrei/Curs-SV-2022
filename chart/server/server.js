const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const port = 3001;
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

server.listen(port, () => {
    console.log(`Server started on port ${port} http://localhost:${port}`);
});

let allMessages = [];

io.on('connection', (socket) => {
    console.log(`new user connected`);
    socket.on("sendAnswer", (answers) => {
        console.log('message recieved', answers); // world
    });
    // const sendMessageToUsers = (messages) => {
    //     let test = 'haha';
    //     socket.emit("sendAll", messages);
    //     socket.broadcast.emit("sendAll", messages, test);
    // };


    // socket.on("message", message => {
    //     console.log('message recieved');
    //     allMessages.push(message);
    //     sendMessageToUsers(allMessages);
    // });
})