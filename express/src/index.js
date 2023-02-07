const express = require("express");
const { friends } = require("./data");
const { timer } = require("./middlewares");
const app = express();
const PORT = 8080;

app.use(timer);

app.get("/friends", (req, res) => {
  res.send(friends);
  console.log("Get friends Successfully");
});

app.get("/friends/:id", (req, res) => {
  const id = +req.params.id;
  res.json(friends.filter((ele) => ele.id === id)[0]);
  console.log(`Get friend with ID ${id} Successfully`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
