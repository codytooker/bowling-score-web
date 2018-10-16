import { combineReducers } from 'redux';

import {
  REQUEST_GAMES,
  RECEIVE_GAMES,
  INVALIDATE_GAMES,
} from '../actions/types';

const byId = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_GAMES:
      return {
        ...action.payload.games
      }

    default: 
      return state;
  }
}

const allIds = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_GAMES:
      return action.payload.gameIds;

    default: 
      return state;
  }
}

const INITIAL_META = {
  isFetching: false,
  isInvalidated: false,
}

const meta = (state = INITIAL_META, action) => {
  switch(action.type) {
    case INVALIDATE_GAMES:
      return Object.assign({}, state, {
        isInvalidated: true
      });

    case REQUEST_GAMES:
      return Object.assign({}, state, {
        isFetching: true,
        isInvalidated: false,
      });

    case RECEIVE_GAMES:
      return Object.assign({}, state, {
        isFetching: false,
        isInvalidated: false,
        lastUpdated: action.payload.receivedAt,
      });

    default: 
      return state;
  }
}

export default combineReducers({
  byId,
  allIds,
  meta,
});