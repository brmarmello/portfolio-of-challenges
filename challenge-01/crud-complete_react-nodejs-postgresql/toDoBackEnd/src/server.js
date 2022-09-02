const express = require("express");
const toDosRoutes = require("./todos.routes");

const app = express();

app.use(express.json());
app.use(toDosRoutes);

app.get("/health", (req, res) => {
  return res.json("up");
});

app.listen(3333, () => console.log('Server up in port 3333'));