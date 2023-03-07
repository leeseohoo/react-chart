const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const port = 8080;

// const http = require('http').createServer(app);

// http.listen(port, () => {
//   console.log(`Listening on http://localhost:${port}`);
// });

// --!  Express + WebSocket
// app.get('/', (req, res) => {
//     res.send('hello world');
// });

// const server = http.createServer(app).listen(8080, () => {
//     console.log("Express server listening");
// });

// const WebSocket = require('ws');
// const ws = new WebSocket.Server({ server });

// ws.on('connection', (socket) => {
//     console.log("Connected to Browser");
//     // socket.on('close', () => {
//     //     console.log("Disconnected from the browser");
//     // });
//     socket.on('message', (msg) => {
//         console.log("receive from client: ", JSON.parse(msg))
//         socket.send("send to client: echo " + JSON.parse(msg)) // python 으로 데이터 보낸다, python에서 data 변수에 들어감
//     });
// });

// --! Only WebSocket
const WebSocket = require('ws');
const ws = new WebSocket.Server({ port:8080 });

ws.on('connection', (socket) => {
    console.log("Connected to Browser");
    // socket.on('close', () => {
    //     console.log("Disconnected from the browser");
    // });
    socket.on('message', (msg) => {
        console.log("receive from client: ", JSON.parse(msg))
        socket.send("send to client: echo " + JSON.parse(msg)) // python 으로 데이터 보낸다, python에서 data 변수에 들어감
        let data = { msg }
    });
});