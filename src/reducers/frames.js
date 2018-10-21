import { combineReducers } from 'redux';

import {
  ADD_GAME,
  REQUEST_GAMES,
  RECEIVE_GAMES,
  INVALIDATE_GAMES,
} from '../actions/types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_GAMES:
      return {
        ...action.payload.entities.frames,
      };

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_GAMES:
      return Object.keys(action.payload.entities.frames).map(Number);

    default:
      return state;
  }
};

const INITIAL_META = {
  isFetching: false,
  isInvalidated: false,
};

const meta = (state = INITIAL_META, action) => {
  switch (action.type) {
    case INVALIDATE_GAMES:
      return Object.assign({}, state, {
        isInvalidated: true,
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
};

export default combineReducers({
  byId,
  allIds,
  meta,
});
