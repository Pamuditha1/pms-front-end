import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../containers/common/Login/Login";

function MainRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default MainRoutes;
