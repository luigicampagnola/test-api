const express = require("express");

const friendsController = require("../controllers/friends.controller");
const friends = require("../models/friends.model");

const friendsRouter = express.Router();


friendsRouter.get("/", (req, res) => {
  friendsController.getFriends(req, res, friends);
});

friendsRouter.get("/:friendId", (req, res) => {
  friendsController.getFriendId(req, res, friends);
});

friendsRouter.post("/", (req, res) => {
  friendsController.friendsHandler(req, res, friends);
});

module.exports = friendsRouter;
