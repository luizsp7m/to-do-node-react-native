const TaskRoutes = require("./routes/TaskRoutes");

const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

server.use("/task", TaskRoutes);

server.listen(4000, () => {
  console.log("API online na porta 4000");
});