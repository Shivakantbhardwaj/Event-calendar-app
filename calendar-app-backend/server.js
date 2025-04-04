require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST", "DELETE"],
  },
});

connectDB();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));


app.use((req, res, next) => {
  req.io = io;
  next();
});

const eventRoutes = require("./routes/eventRoutes");
app.use("/api/events", eventRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
