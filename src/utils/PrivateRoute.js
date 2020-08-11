import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ isLoggedIn, ...props }) =>
  isLoggedIn
    ? <Route { ...props } />
    : <Redirect to="/login" />

function mapStateToProps(state) {
  return {
      isLoggedIn: !!state.auth.isAuthenticated
  };
}
  
export default connect(mapStateToProps)(PrivateRoute)