import React from "react";
import { Route, Switch } from "react-router";
import WelcomeScreen from "../Components/WelcomeScreen";
import WorkspaceDetails from "../Components/WorkspaceDetails";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen />
        </Route>

        <Route exact path="/workspace">
          <WorkspaceDetails />
        </Route>
      </Switch>
    </div>
  );
}

export { Routes };
