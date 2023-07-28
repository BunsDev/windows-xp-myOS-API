const express = require("express");
const Router = express.Router();
const controller = require("../controllers/UserController");

Router.get("/", controller.getAllUsers);
Router.post("/", controller.createUser);
Router.delete("/", controller.deleteAllUsers);

module.exports = Router;
