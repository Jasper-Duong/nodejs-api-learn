const path = require("path");

function getMessages(req, res) {
  const filepath = path.join(
    __dirname,
    "..",
    "view",
    "assets",
    "images",
    "devProcess.JPG"
  );
  res.sendFile(filepath);
}

function postMessage(req, res) {
  console.log(`Updating messages...`);
}

module.exports = { getMessages, postMessage };
