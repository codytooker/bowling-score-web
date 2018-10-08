import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { isAuthenticated } from '../../../reducers/auth';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
);

const mapStateToProps = state => {
  return {
    isAuthenticated: isAuthenticated(state),
  }
}

export default connect(mapStateToProps)(PrivateRoute);