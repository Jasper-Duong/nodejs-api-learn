const express = require("express");
const { friends } = require("./data");
const { timer } = require("./middlewares");
const app = express();
const PORT = 8080;

// MIDDLEWARES
app.use(timer);
app.use(express.json());

app.get("/friends", (req, res) => {
  res.send(friends);
  console.log("Get friends Successfully");
});

app.get("/friends/:id", (req, res) => {
  const id = +req.params.id;
  res.json(friends.filter((ele) => ele.id === id)[0]);
  console.log(`Get friend with ID ${id} Successfully`);
});

app.post("/friends", (req, res) => {
  if (!req.body.name || !req.body.age) {
    return res.status(400).json({
      error: "Friend is in invalid shape!",
    });
  }
  const { name, age } = req.body;
  const newFriend = {
    id: friends.length, 
    name,
    age,
  };
  friends.push(newFriend);
  res.json(newFriend);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
