import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./screens/Home.screen";
import OverviewScreen from "./screens/Overview.screen";
import NoMatch404Screen from "./screens/NoMatch404.screen";

const routesConfig = [
  {
    path: "/",
    component: HomeScreen,
    exact: true,
  },
  {
    path: "/overview/:name",
    component: OverviewScreen,
  },
  {
    path: "*",
    component: NoMatch404Screen,
  },
];

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {routesConfig.map((route, i) => (
          <Route
            key={i}
            {...route}
            path={route.path}
            render={(props) => (
              <route.component {...props} routes={route.routes} />
            )}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default AppRouter;
