import { combineReducers } from 'redux';

import {
  RECEIVE_GAMES,
  ADD_GAME,
  UPDATE_FRAME,
} from '../actions/types';

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_GAME:
    case RECEIVE_GAMES:
      return {
        ...state,
        ...action.payload.entities.frames,
      };

    case UPDATE_FRAME:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_GAME:
    case RECEIVE_GAMES:
      return [
        ...state,
        ...Object.keys(action.payload.entities.frames).map(Number),
      ];

    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds,
});

export const getFrameByID = (state, id) => state.frames.byId[id];
