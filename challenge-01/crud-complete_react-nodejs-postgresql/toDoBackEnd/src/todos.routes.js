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
toDosRoutes.get("/todos", async (request, response) => {
  const todo = await prisma.todo.findMany()
  return response.status(200).json(todo);
});

// U
toDosRoutes.put("/todos", async (request, response) => {
  const {
    name,
    id,
    status,
  } = request.body;

  if (!id) {
    return response.status(400).json("Id is Mandatory");
  };

  const todoAleareadyExist = await prisma.todo.findUnique({ where: { id } });

  if (!todoAleareadyExist) {
    return response.status(404).json("Todo not Exist");
  }

  const todo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      name,
      status,
    },
  });

  return response.status(200).json(todo);
});

// D

module.exports = toDosRoutes;
