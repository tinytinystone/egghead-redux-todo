import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";
import AddTodo from "./components/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

const store = createStore(todoApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </Provider>
    );
  }
}

export default App;
