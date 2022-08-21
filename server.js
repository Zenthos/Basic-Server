const express = require('express');
const os = require('os');

const app = express();
const net = os.networkInterfaces();
const ip = net?.ens160 ? net['ens160'][0]['address'] : 'localhost';
const port = 8000;

app.get('/', (req, res) => {
  res.send(`${os.hostname()}\n`);
});

app.listen(port, () => {
  console.log(`Server Started. \nListening on ${ip}:${port}`);
})