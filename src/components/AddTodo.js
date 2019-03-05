import React from "react";
import { addTodo } from "../actions";
import { connect } from "react-redux";
import "./AddTodo.scss";

const AddTodo = ({ addTodo }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const body = e.target.elements.body.value;
        addTodo(body);
        e.target.elements.body.value = "";
      }}
      className="add-todo"
    >
      <input
        type="text"
        name="body"
        className="add-todo__input"
        placeholder="New Todo"
      />
      <button className="add-todo__button">Add Todo</button>
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
