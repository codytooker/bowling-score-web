import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Login, SignUp, SignOut, Feature } from '../pages';
import { PrivateRoute, GuestRoute } from '../utils';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <GuestRoute exact path="/login" component={Login} />
      <GuestRoute exact path="/SignUp" component={SignUp} />
      <PrivateRoute exact path="/feature" component={Feature} />
      <PrivateRoute exact path="/signout" component={SignOut} />
    </Switch>
  </Router>
);

export default App;