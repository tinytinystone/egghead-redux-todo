import { normalize } from "normalizr";
import * as api from "../api";
import * as schema from "./schema";
import { getIsFetching } from "../reducers";

export const fetchTodos = filter => async (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }
  try {
    dispatch({
      type: "FETCH_TODOS_REQUEST",
      filter
    });
    const response = await api.fetchTodos(filter);
    dispatch({
      type: "FETCH_TODOS_SUCCESS",
      filter,
      response: normalize(response, schema.arrayOfTodos)
    });
  } catch (error) {
    dispatch({
      type: "FETCH_TODOS_FAILTURE",
      filter,
      message: error.message || "Something went wrong."
    });
  }
};

export const addTodo = text => async dispatch => {
  const response = await api.addTodo(text);
  return dispatch({
    type: "ADD_TODO_SUCCESS",
    response: normalize(response, schema.todo)
  });
};

export const toggleTodo = id => async dispatch => {
  const response = await api.toggleTodo(id);
  return dispatch({
    type: "TOGGLE_TODO_SUCCESS",
    response: normalize(response, schema.todo)
  });
};
