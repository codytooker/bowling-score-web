import {
  AUTH_USER,
  UNAUTH_USER,
} from '../actions/types';

const INITIAL_STATE = {
  user: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        user: action.payload,
      };

    case UNAUTH_USER:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export function isAuthenticated(state) {
  return !!state.auth.user;
}

export function getUserID(state) {
  return state.auth.user.id;
}
