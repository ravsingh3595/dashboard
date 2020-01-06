import React from "react";
import { Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Usage from "./containers/Usage";
import { createBrowserHistory as createHistory } from "history";
import Grid from "@material-ui/core/Grid";

export const history = createHistory();
const routes = () => {
  return (
    <div>
      <div>
        <Grid container spacing={3} justify="center">
          <Grid item xs={10}>
            <Router history={history}>
              <Route path="/" component={NavBar} />
              <Route path="/usage" component={Usage} />
            </Router>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default routes;
