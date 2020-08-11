import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ isLoggedIn, restricted, ...props }) =>
  isLoggedIn && restricted
    ? <Redirect to="/dashboard" />
    : <Route { ...props } />

function mapStateToProps(state) {
  return {
      isLoggedIn: !!state.auth.isAuthenticated
  };
}
  
export default connect(mapStateToProps)(PublicRoute)