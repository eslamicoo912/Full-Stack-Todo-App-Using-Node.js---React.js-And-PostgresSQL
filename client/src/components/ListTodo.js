import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  var counter = 0;

  // get all todos
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:7000/todos");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // delete todo
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:7000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  // clear all todos
  const clearTodos = async () => {
    try {
      await fetch("http://localhost:7000/todos", {
        method: "DELETE",
      });
      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>#</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            counter++;
            return (
              <tr key={todo.id}>
                <td>{counter}</td>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn btn-danger" onClick={() => clearTodos()}>
        Clear All
      </button>
    </Fragment>
  );
};

export default ListTodo;
