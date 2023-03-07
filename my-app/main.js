// javascript websocket server

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port:8080 });

// wss.on('connection', ws => {
//     ws.on('message', message => {
//         console.log("receive from client: ", JSON.parse(message))
//         ws.send("send to client: echo ", JSON.parse(message)) // python 으로 데이터 보낸다, python에서 data 변수에 들어감
//     });
// });


wss.on('connection', ws => {
    ws.on('message', message => {
        console.log("receive from client: ", message)
        ws.send("send to client: echo " + message + "!!") // python 으로 데이터 보낸다, python에서 data 변수에 들어감    
    });
});
 

// javascript websocket client - Don't Use This!!! - This isn't working!!❌
// const WebSocket = require('ws');
// const ws = new WebSocket('ws://localhost:8080');
// ws.onopen = (e) => {
//     ws.send('Opened!');
// };

// ws.onmessage = (e) => {
//     console.log(JSON.parse(e.data));
// };

// ws.onerror = (e) => {
//     console.log(e);
// }
