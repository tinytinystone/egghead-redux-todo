import React, { Component } from "react";
import FilterRadio from "../containers/FilterRadio";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <fieldset className="filters">
        <legend className="filters__title">Show:</legend>
        <FilterRadio filter="all">All</FilterRadio>
        <FilterRadio filter="active">Active</FilterRadio>
        <FilterRadio filter="completed">Completed</FilterRadio>
      </fieldset>
    );
  }
}
