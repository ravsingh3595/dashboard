import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import { createBrowserHistory as createHistory } from "history";

export const history = createHistory();
const routes = () => {
  return (
    <div>
      <div>
        <Router history={history}>
          <Switch>
            <Route path="/" component={NavBar} exact={true} />
            <Route path="/usage" component={NavBar} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default routes;
