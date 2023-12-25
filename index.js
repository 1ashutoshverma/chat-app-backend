const express = require("express");
const http = require("http");
const cors = require("cors");
const { connection } = require("./configs/db");
const { userController } = require("./controllers/user.routes");
const cookieParser = require("cookie-parser");
const { authorization } = require("./middlewares/authorization");
const { Server } = require("socket.io");

const app = express();
const PORT = process.env.PORT || 8080;
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "server is running" });
});

app.use("/user", userController);

io.on("connection", (socket) => {
  console.log(socket);

  socket.on("chatMsg", (msg) => {
    io.emit("chatMsg", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

httpServer.listen(PORT, async () => {
  try {
    await connection;
    console.log("DB is connected");
  } catch (error) {
    console.log("Error while connection to db");
    console.log(error);
  }
  console.log("server is running");
});
