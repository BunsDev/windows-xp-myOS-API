const express = require("express");
const Router = express.Router();

const UserRouter = require("./UserRouter");
const LogRouter = require("./LogRouter");
const TextRouter = require("./TextRouter");

Router.use("/users", UserRouter);
Router.use("/logs", LogRouter);
Router.use("/texts", TextRouter);

module.exports = Router;
