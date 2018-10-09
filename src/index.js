import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';

import reducers from './reducers';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import setAuthorizationToken from './utils/setAuthorizationToken';
import './index.css';

setAuthorizationToken(localStorage.getItem('token'));

const store = createStore(
  reducers,
  { auth: { user: localStorage.getItem('token') && jwtDecode(localStorage.getItem('token')).user } },
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
