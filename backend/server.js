

const express = require('express');
const connectDb = require('./config/connectionDb');

const app = express();

const port = 3000;

connectDb();

app.get('/', (req, res) => {
  res.send("server is running here :) ");
})

app.listen(port, () => {
  console.log("server is running")
})
