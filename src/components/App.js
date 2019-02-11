import React from "react";
import AddTodo from "./AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </>
  );
};

export default App;
