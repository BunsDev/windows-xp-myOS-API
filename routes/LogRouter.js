const express = require("express");
const Router = express.Router();
const controller = require("../controllers/LogController");

Router.get("/", controller.getAllLogs);
Router.post("/", controller.createLog);
// Router.delete("/", controller.deleteAllUsers);

module.exports = Router;
