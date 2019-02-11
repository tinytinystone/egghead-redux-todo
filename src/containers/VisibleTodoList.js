import TodoList from "../components/TodoList";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "ACTIVE":
      return todos.filter(t => t.completed === false);
    case "COMPLETED":
      return todos.filter(t => t.completed === true);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo(id) {
      dispatch(toggleTodo(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
