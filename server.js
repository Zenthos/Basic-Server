const express = require('express');
const os = require('os');

const app = express();
const net = os.networkInterfaces();
const port = 8000;

app.get('/', (req, res) => {
  res.send(`${os.hostname()}\n`);
});

app.listen(port, () => {
  console.log(`Server Started.`);
  for (const interface of Object.values(net)) {
    const ipv4s = interface.filter((info) => info.family === 'IPv4' || info.family === 4);

    for (const { address } of ipv4s) {
      console.log(`Listening on ${address}:${port}`);
    }
  }
})