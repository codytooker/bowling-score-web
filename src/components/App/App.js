import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Login, SignUp, SignOut, NewGame, Games } from '../pages';
import { PrivateRoute, GuestRoute } from '../utils';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <GuestRoute exact path="/login" component={Login} />
      <GuestRoute exact path="/SignUp" component={SignUp} />
      <Route exact path="/signout" component={SignOut} />
      <PrivateRoute exact path="/new-game" component={NewGame} />
      <PrivateRoute exact path="/games" component={Games} />
    </Switch>
  </Router>
);

export default App;