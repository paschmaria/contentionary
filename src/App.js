import React from 'react';
import { Switch } from 'react-router-dom';
import Login from "./layout/Auth/Login";
import Signup from "./layout/Auth/Signup";
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

function App() {
  return (
    <Switch>
      <PublicRoute restricted={true} component={Login} path="/login" exact />
      <PublicRoute restricted={true} component={Signup} path="/signup" exact />
    </Switch>
  );
}

export default App;
