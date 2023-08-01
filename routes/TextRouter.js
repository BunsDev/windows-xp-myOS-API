const express = require("express");
const Router = express.Router();
const controller = require("../controllers/TextController");

Router.get("/", controller.getAllTexts);
Router.post("/", controller.createText);
Router.put("/", controller.updateText);
Router.delete("/", controller.deleteText);

module.exports = Router;
