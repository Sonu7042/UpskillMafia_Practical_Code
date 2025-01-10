const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, "public")));

let connectedUsers = {};


io.on("connection", (socket) => {
  console.log("A user connected with ID:", socket.id);

  // Add the user to the list of connected users
  console.log("this is users",socket.id.substring(0, 4))
  connectedUsers[socket.id] = `User-${socket.id.substring(0, 4)}`; // Assign a simple display name

  console.log("this is newline",connectedUsers)
  // Send the user's socket.id back to them
  socket.emit("yourId", socket.id);

  // Broadcast the updated list of users to all clients
  io.emit("updateUsers", connectedUsers);

  // Listen for private messages
  socket.on("privateMessage", ({ recipientId, message }) => {
    console.log(`Message from ${socket.id} to ${recipientId}: ${message}`);

    // Send the message to the recipient
    io.to(recipientId).emit("privateMessage", {
      senderId: socket.id,
      message,
    });
  });

  

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);

    // Remove the user from the list
    delete connectedUsers[socket.id];

    // Broadcast the updated list of users
    io.emit("updateUsers", connectedUsers);
  });
});

server.listen(9000, () => {
  console.log("Server is running on port 9000");
});
