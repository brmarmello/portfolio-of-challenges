const express = require("express");
const cors = require("cors");
const toDosRoutes = require("./todos.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(toDosRoutes);

app.get("/health", (req, res) => {
  return res.json("up");
});

app.listen(3333, () => console.log('Server up in port 3333'));