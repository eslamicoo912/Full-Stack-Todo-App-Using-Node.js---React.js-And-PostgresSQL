const express = require("express");
const cors = require("cors");
const pool = require("./database");
const queries = require("./queries");

const app = express();
const port = 7000;

// middlewares
app.use(cors());
app.use(express.json());

// routes //

// create a todo

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(queries.createTodo, [description]);
    res.status(200).json(newTodo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// get all todos

app.get("/todos", async (req, res) => {
  try {
    const todos = await pool.query(queries.getAllTodos);
    res.status(200).json(todos.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// get a todo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query(queries.getTodo, [id]);
    res.status(200).json(todo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    pool.query(queries.updateTodo, [description, id]);
    res.status(200).json(`Todo ${id} is updated`);
  } catch (error) {
    console.log(error.message);
  }
});

// delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    pool.query(queries.deleteTodo, [id]);
    res.status(200).json(`Todo ${id} is deleted`);
  } catch (error) {
    console.log(error.message);
  }
});

// delete all todos

app.delete("/todos", async (req, res) => {
  try {
    const deleteAll = await pool.query(queries.deleteAll);
    res.status(200).json(deleteAll.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(port, () => {
  console.log(`listening for port ${port}`);
});
