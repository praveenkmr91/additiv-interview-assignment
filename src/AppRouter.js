import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import OverviewScreen from "./screens/Overview.screen";
import HomeScreen from "./screens/Home.screen";
import NoMatch404Screen from "./screens/NoMatch404.screen";

/* const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/overview",
    component: Overview,
  },
  {
    path: "*",
    component: NoMatch404,
  },
]; */

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<HomeScreen />} />
        <Route path="/overview/:name" children={<OverviewScreen />} />
        <Route path="*" children={<NoMatch404Screen />} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
