import React from "react";
import { addTodo } from "../actions";
import { connect } from "react-redux";

const AddTodo = ({ addTodo }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const body = e.target.elements.body.value;
        addTodo(body);
        e.target.elements.body.value = "";
      }}
    >
      <input type="text" name="body" />
      <button>Add Todo</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo(text) {
      dispatch(addTodo(text));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
