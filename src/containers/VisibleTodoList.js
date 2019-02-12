import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toggleTodo } from "../actions";
import { getVisibleTodos } from "../reducers";
import TodoList from "../components/TodoList";

const mapStateToProps = (state, { match }) => {
  return {
    todos: getVisibleTodos(state, match.params.filter || "all")
  };
};

const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
  )(TodoList)
);

export default VisibleTodoList;
