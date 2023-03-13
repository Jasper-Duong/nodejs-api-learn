const express = require("express");
const path = require("path");
const { timer } = require("./middlewares");
const { friendsRouter } = require("./routes/friends.routers");
const { messagesRouter } = require("./routes/messages.routers");
const app = express();
const PORT = 8080;

// APP SET
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "view"));

// MIDDLEWARES
app.use(timer);
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.render(path.join(__dirname, "view", "index.hbs"), {
    title: "Dev Process",
    heading: "Developer Process @ Globee"
  });
});
app.use("/", express.static(path.join(__dirname, "view")));
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

// APP EXPOSE
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
