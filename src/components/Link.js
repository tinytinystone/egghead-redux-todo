import React from "react";

const Link = ({ onClick, active, children }) => {
  return (
    <span
      onClick={onClick}
      style={{
        cursor: "pointer",
        paddingLeft: "4px",
        color: "black",
        textDecoration: active ? "underline" : "none"
      }}
    >
      {children}
    </span>
  );
};

export default Link;
