import React, { Suspense } from "react";

import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Loader from "../components/Loader";
const history = createHistory();

const Home = React.lazy(() => import("../components/Home"));
const MarketPlace = React.lazy(() => import("../components/MarketPlace"));

const AppRouter = () => (
  <Router history={history}>
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/market-place" component={MarketPlace} />
        </Switch>
      </Suspense>
    </>
  </Router>
);

export default AppRouter;
