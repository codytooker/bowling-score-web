import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from '../ui';
import { Home, Login } from '../pages';

const App = () => (
  <>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router >
  </>
);

export default App;