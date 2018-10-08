import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { Home, Login, SignUp, SignOut, Feature } from '../pages';
import { PrivateRoute } from '../utils';
import Header from '../UI/Header';

const App = () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <PrivateRoute exact path="/feature" component={Feature} />
        <PrivateRoute exact path="/signout" component={SignOut} />
      </Switch>
    </>
  </Router>
);

export default App;