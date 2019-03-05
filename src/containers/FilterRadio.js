import React from "react";
import { Route } from "react-router-dom";
import Radio from "../components/Radio";

const FilterRadio = ({ filter, children }) => {
  return (
    <Route
      exact
      path={filter === "all" ? "" : "/" + filter}
      children={({ match, history }) => (
        <Radio match={match} history={history} children={children} />
      )}
    />
  );
};

export default FilterRadio;
