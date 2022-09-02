const express = require("express");

const allTodos = [{ nome: "aaaa", status: false }];
const toDosRoutes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// C
toDosRoutes.post("/todos", async (request, response) => {
  const { name } = request.body;
  const todo = await prisma.todo.create({
    data: {
      name,
  }})
  // allTodos.push({ name, status: false });
  return response.status(201).json(todo);
});

// R
toDosRoutes.get("/todos", (request, response) => {
  return response.status(200).json(allTodos);
});

// U


// D

module.exports = toDosRoutes;
