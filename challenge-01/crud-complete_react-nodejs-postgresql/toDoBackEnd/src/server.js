const express = require("express");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  return res.json("up");
});