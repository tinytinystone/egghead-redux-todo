import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => {
        return <Todo {...todo} handleClick={() => toggleTodo(todo.id)} />;
      })}
    </ul>
  );
};

export default TodoList;
