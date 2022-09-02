const express = require("express");

const allTodos = [{ nome: "aaaa", status: false }];
const toDosRoutes = express.Router();

// C
toDosRoutes.post("/todos", (request, response) => {
  const { name } = request.body;
  allTodos.push({ name, status: false });
  return response.status(201).json(allTodos);
})

// R


// U


// D

module.exports = toDosRoutes;
