import axios from 'axios';
import {
  AUTH_USER
} from './types';

export const signup = values => dispatch => {
  return axios.post('http://bowling-score.test/api/auth/register', values)
    .then(res => {
      dispatch({ type: AUTH_USER, payload: res.data.access_token });
      localStorage.setItem('token', res.data.access_token);
    });
};