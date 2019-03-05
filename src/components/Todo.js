import React from "react";
import "./Todo.scss";

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    className={
      completed ? "todo-list__item--completed" : "todo-list__item--active"
    }
  >
    {text}
  </li>
);

export default Todo;
