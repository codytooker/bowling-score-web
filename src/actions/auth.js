import axios from 'axios';
import jwtDecode from 'jwt-decode';

import setAuthorizationToken from '../utils/setAuthorizationToken';
import {
  AUTH_USER,
  UNAUTH_USER,
} from './types';

export const signup = values => dispatch => axios.post('/auth/register', values)
  .then((res) => {
    loginUser(dispatch, res.data.access_token);
  });

export const login = values => dispatch => axios.post('/auth/login', values)
  .then((res) => {
    loginUser(dispatch, res.data.access_token);
  });

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: UNAUTH_USER,
  };
};

const loginUser = (dispatch, token) => {
  const decodedToken = jwtDecode(token);

  dispatch({ type: AUTH_USER, payload: decodedToken.user });
  localStorage.setItem('token', token);
  setAuthorizationToken(token);
};
