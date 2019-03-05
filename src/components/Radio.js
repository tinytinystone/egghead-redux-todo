import React from "react";
import "./Radio.scss";

const Radio = ({ match, history, children }) => {
  return (
    <label
      className="filter"
      onClick={() => {
        const path =
          children.toLowerCase() === "all" ? "" : "/" + children.toLowerCase();
        history.push(path);
      }}
    >
      <input
        type="radio"
        checked={!!match}
        name="filter"
        className="filter__radio"
        readOnly
      />
      <span className={`filter__label--${children.toLowerCase()}`}>
        {children}
      </span>
    </label>
  );
};

export default Radio;
