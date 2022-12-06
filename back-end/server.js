require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("_middleware/error-handler");
const port = process.env.NODE_ENV === "production" ? process.env.PORT : 4000;
global.__basedir = __dirname;
const server = require("http").createServer(app);

const corsOptions = {
  origin: "*",
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

// api users
app.use("/api/users", require("./users/users.controller"));
app.use("/api/todo", require("./todo-list/todo-list.controller"));

// global error handler
app.use(errorHandler);

// start server
server.listen(port, () => console.log("Server listening on port " + port));
