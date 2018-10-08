import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { isAuthenticated } from '../../../reducers/auth';

const GuestRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={props => (
    !isAuthenticated
      ? <Component {...props} />
      : <Redirect to="/" />
  )} />
);

const mapStateToProps = state => {
  return {
    isAuthenticated: isAuthenticated(state),
  }
}

export default connect(mapStateToProps)(GuestRoute);