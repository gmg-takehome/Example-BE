const express = require("express");

const authRouter = require("../routes/auth-router.js");
const postsRouter = require("../routes/posts-router.js");

const server = express();

server.use(express.json());

server.use("/posts", postsRouter);
server.use("/auth", authRouter);

server.get("/", (req, res) => {
  res.send("server active");
});

module.exports = server;