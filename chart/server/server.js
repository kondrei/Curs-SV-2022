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
//getting random questions
let question = '';
const axios = require('axios').default;
axios.get('https://api.api-ninjas.com/v1/trivia', {
    headers: {
        'X-Api-Key': 'OMbl2ho3ineFZJDFbPNL3g==HTJzcCNOl81rMBHF'
    }
})
    .then(function (response) {
        // handle success
        question = response.data;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });

//collecting answers
const answers = [];
const chartElements = (answers) => {
    const result = {};

    //count answers
    answers.length && answers.forEach(element => {
        result[element] = (result[element] || 0) + 1;
    });

    // replace them with percent
    for (let [key, value] of Object.entries(result)) {
        result[key] = (value / answers.length * 100).toFixed(2);

    }

    return result;
}


io.on('connection', (socket) => {
    console.log(`New user connected`);
    socket.emit("sendQuestion", question);
    socket.on("sendAnswer", (answer) => {
        answers.push(answer);
        sendAnswersToUsers(chartElements(answers));
    });

    const sendAnswersToUsers = (data) => {
        socket.emit("sendAll", data);
        socket.broadcast.emit("sendAll", data);
    };

})
