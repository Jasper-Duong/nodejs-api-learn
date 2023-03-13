const { Router } = require("express");
const {
  postMessage,
  getMessages,
} = require("../controllers/messages.controllers");
const messagesRouter = Router();

messagesRouter.post("/", postMessage);
messagesRouter.get("/", getMessages);

module.exports = { messagesRouter };
