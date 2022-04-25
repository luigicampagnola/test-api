//Node dependecies
const express = require("express");

//App file system imports
const messagesController = require("../controllers/messages.controller");
const messages = require("../models/messages.model");

//Express Router middleware
const messagesRouter = express.Router();

//message collection
messagesRouter.get("/", (req, res) => {
  messagesController.getMessages(req, res, messages);
});

messagesRouter.post("/", (req, res) => {
  messagesController.postMessage(req, res, messages);
});

module.exports = messagesRouter;
