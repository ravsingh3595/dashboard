import React from "react";
import { Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Usage from "./containers/Usage";
import { createBrowserHistory as createHistory } from "history";

export const history = createHistory();
const routes = () => {
  return (
    <div>
      <div>
        <Router history={history}>
          <Route path="/" component={NavBar} />
          <Route path="/usage" component={Usage} />
        </Router>
      </div>
    </div>
  );
};

export default routes;
