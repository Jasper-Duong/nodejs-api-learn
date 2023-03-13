const { friends } = require("../models/friends.models");
function getFriends(req, res) {
  res.send(friends);
  console.log("Get friends Successfully");
}

function getFriendById(req, res) {
  const id = +req.params.id;
  res.json(friends.filter((ele) => ele.id === id)[0]);
  console.log(`Get friend with ID ${id} Successfully`);
}

function postFriend(req, res) {
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
}

module.exports = { getFriends, getFriendById, postFriend };
