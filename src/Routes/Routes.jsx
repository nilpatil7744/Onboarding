import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import LogoUI from "../Common/Logo";
import LaunchScreen from "../Components/LaunchScreen";
import ProgressBarUi from "../Components/ProgressBar";
import SetupScreen from "../Components/SetupScreen";
import WelcomeScreen from "../Components/WelcomeScreen";
import WorkspaceDetails from "../Components/WorkspaceDetails";
import { loadData } from "../utils/LocalStorage";

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

        <Route exact path="/setup">
          <SetupScreen />
        </Route>

        <Route exact path="/launch">
          <LaunchScreen />
        </Route>
      </Switch>
    </div>
  );
}

export { Routes };
