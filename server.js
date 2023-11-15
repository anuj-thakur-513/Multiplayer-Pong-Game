const http = require("http");
const io = require("socket.io");

const { api } = require("./api");

const httpServer = http.createServer(api);
const socketServer = io(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const { listen } = require("./sockets");

const PORT = 3000;

httpServer.listen(PORT);
console.log(`Listening on ${PORT}`);

listen(socketServer);
