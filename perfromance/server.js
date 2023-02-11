const express = require("express");
const cluster = require("cluster");
const os = require("os");

const app = express();

const delay = (duration) => {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {}
};

app.get("/", (req, res) => {
  res.send(`Performance on process ${process.pid}`);
});
app.get("/timer", (req, res) => {
  delay(9000); // Block Event Loop
  res.send("Time's up!");
});

if (cluster.isMaster) {
  console.log("Master process started");
  const NUM_WORKERS = os.cpus().length;
  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork();
  }
} else {
  console.log("Worker process started");
  app.listen(8080);
}
