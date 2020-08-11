import React, { Suspense } from "react";
import { Switch } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";

import Login from "./layout/Auth/Login";
import Signup from "./layout/Auth/Signup";

import Loader from "./components/Loader";
const Home = React.lazy(() => import("./components/Home"));
const MarketPlace = React.lazy(() => import("./components/MarketPlace"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <PublicRoute restricted={true} component={Home} path="/" exact />
        <PublicRoute
          restricted={true}
          component={MarketPlace}
          path="/market-place"
          exact
        />
        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <PublicRoute
          restricted={true}
          component={Signup}
          path="/signup"
          exact
        />
      </Switch>
    </Suspense>
  );
}

export default App;
