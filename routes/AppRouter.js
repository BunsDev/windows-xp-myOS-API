const express = require("express");
const Router = express.Router();

const UserRouter = require("./UserRouter");
const LogRouter = require("./LogRouter");

Router.use("/users", UserRouter);
Router.use("/logs", LogRouter);

module.exports = Router;
