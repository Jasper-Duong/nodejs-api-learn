const { Router } = require("express");
const {
  postFriend,
  getFriendById,
  getFriends,
} = require("../controllers/friends.controllers");
const friendsRouter = Router();

friendsRouter.post("/", postFriend);
friendsRouter.get("/", getFriends);
friendsRouter.get("/:id", getFriendById);

module.exports = {friendsRouter}