import { combineReducers } from 'redux';

import {
  RECEIVE_GAMES,
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

export default combineReducers({
  byId,
  allIds,
});

export const getFrameByID = (state, id) => state.frames.byId[id];
