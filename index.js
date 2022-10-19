const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 15000;
const rooms = require("./data/hotel.json");

app.use(cors());

// ** simple api

app.get("/", (req, res) => {
  res.send("This is node");
});

// ** hotel data api endpoint
app.get("/rooms", (req, res) => {
  res.send(rooms);
});

// ** individual rooms data api end point

app.get("/rooms/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const room = rooms.find((roomItem) => roomItem._id === id);

  res.send(room);
});

app.listen(port, () =>
  console.log(`simple hotel app running in port: ${port}`)
);
