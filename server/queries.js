const createTodo = "INSERT INTO todo (description) VALUES($1) RETURNING *";
const getAllTodos = "SELECT * FROM todo";
const getTodo = "SELECT * FROM todo WHERE id = $1";
const updateTodo = "UPDATE todo SET description = $1 WHERE id = $2";
const deleteTodo = "DELETE FROM todo WHERE id = $1";
const deleteAll = "DELETE FROM  todo";

module.exports = {
  createTodo,
  getAllTodos,
  getTodo,
  updateTodo,
  deleteTodo,
  deleteAll,
};
