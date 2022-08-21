import isDocker from 'is-docker';
import express from 'express';
import os from 'os';

const app = express();
const net = os.networkInterfaces();
const usingDocker = isDocker();
const port = 8000;

app.get('/', (req, res) => {
  res.send(`${usingDocker ? 'docker-' : ''}${os.hostname()}\n`);
});

app.listen(port, () => {
  console.log(`${usingDocker ? 'Docker ' : ''}Server Started.`);
  for (const inter of Object.values(net)) {
    const ipv4s = inter.filter((info) => info.family === 'IPv4' || info.family === 4);

    for (const { address } of ipv4s) {
      if (address === '127.0.0.1') continue;
      console.log(`Listening on ${address}:${port}`);
    }
  }
})