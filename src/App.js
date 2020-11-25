import React, { Suspense } from "react";
import { Router, Switch } from "react-router-dom";
import PrivateRoute from "./component/Route/PrivateRoute";
import CustomRoute from "./component/Route/CustomRoute";
import NoRouteMatchPage from "./component/noRouteMatch/NoRouteMatchPage";
import history from "./history";
import AppPage from "./component/appPage";
import Signin from "./component/signin/Signin";
/**
 * App
 * @return {jsx} result
 */
const App = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <PrivateRoute component={AppPage} path="/" exact />
          <CustomRoute component={Signin} path="/auth/login" exact />
          <CustomRoute component={NoRouteMatchPage} exact />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
