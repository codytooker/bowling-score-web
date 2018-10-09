import axios from 'axios';
import jwtDecode from 'jwt-decode';

import {
  AUTH_USER
} from './types';

export const signup = values => dispatch => {
  return axios.post('http://bowling-score.test/api/auth/register', values)
    .then(res => {
      loginUser(dispatch, res.data.access_token);
    });
};

export const login = values => dispatch => {
  return axios.post('http://bowling-score.test/api/auth/login', values)
    .then(res => {
      loginUser(dispatch, res.data.access_token);
    });
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: '',
  }
}

function loginUser(dispatch, token) {
  const decodedToken = jwtDecode(token);

  dispatch({ type: AUTH_USER, payload: decodedToken.user });
  localStorage.setItem('token', token);
}