/**
 * Create a rest API running on port 4000 using express framework in NodeJs and run it on a cluster for each CPU.
 * 
 * API should have following endpoint
 * GET / : returns the following message - "Hello from Worker <id>" and should log the following message in the console on the server - "Worker <id> running!"
 * Note: "id" is the cluster worker id.
 */

const express = require('express');
const cluster = require('cluster');
const numberOfCPUs = require('os').cpus().length;
const app = express();
const port = 4000;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // creating new workers
  for (let i = 0; i < numberOfCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`worker ${worker.process.pid} died`);
  });

} else {
  console.log(`Worker ${process.pid} is running.`);

  app.get('/', (req, res) => {
    res.send(`Hello from Worker ${process.pid}`)
  })

  app.listen(port, () => {
    console.log(`Node Server up for worker ${process.pid} at http://localhost:${port} port`);
  });

}
