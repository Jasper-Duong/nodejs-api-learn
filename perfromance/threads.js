const { isMainThread, workerData, Worker } = require("worker_threads");

if (isMainThread) {
  console.log(`Main Thread ${process.pid}`);
  new Worker(__filename, {
    workerData: [7, 2, 6, 3],
  });
  new Worker(__filename, {
    workerData: [1, 3, 4, 3],
  });
} else {
  console.log(`Worker ${process.pid}`);
  console.log(`${workerData} -> ${workerData.sort()}`);
}
