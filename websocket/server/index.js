const WebSocket = require("ws");

const wss = new WebSocket.Server({
  port: 8082,
});

wss.on("connection", (ws) => {
  console.log("conenction received");
  ws.on("close", () => {
    console.log("connection end message received");
  });
  ws.on("message", (data, isBinary) => {
    console.log("Client has sent us: ", data.toString());
    ws.send(data.toString().toUpperCase());
  });
});
