import React from "react";
import AddTodo from "./AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";
import "./App.scss";

const App = ({ match }) => {
  console.log(match.params.filter);
  return (
    <div className="todo-app">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default App;
