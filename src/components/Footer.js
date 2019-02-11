import React, { Component } from "react";
import FilterLink from "../containers/FilterLink";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <FilterLink filter="SHOW_ALL">All</FilterLink>
        <FilterLink filter="ACTIVE">Active</FilterLink>
        <FilterLink filter="COMPLETED">Completed</FilterLink>
      </div>
    );
  }
}
