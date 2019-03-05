import React from "react";
import { Provider } from "react-redux";
import App from "./components/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Root.scss";

const Root = ({ store }) => {
  return (
    <div className="container">
      <Provider store={store}>
        <Router>
          <Route
            key={window.location.pathname}
            path="/:filter?"
            component={App}
          />
        </Router>
      </Provider>
    </div>
  );
};

export default Root;
