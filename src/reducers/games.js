import { combineReducers } from 'redux';

import {
  ADD_GAME,
  REQUEST_GAMES,
  RECEIVE_GAMES,
  INVALIDATE_GAMES,
} from '../actions/types';

import { getFrameByID } from './frames';

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_GAME:
    case RECEIVE_GAMES:
      return {
        ...state,
        ...action.payload.entities.games,
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
        ...Object.keys(action.payload.entities.games).map(Number),
      ];

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

export function getGames(state) {
  const games = state.games.allIds.map(id => state.games.byId[id]);

  return games.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// export const getGameByID = (state, id) => state.games.byId[id];

export const getGameByID = (state, id) => {
  const game = state.games.byId[id];

  if (typeof game === 'undefined') {
    return game;
  }

  const frames = game.frames.map(frame => getFrameByID(state, frame));

  return {
    ...game,
    frames,
  };
};


export const isFetching = state => state.games.meta.isFetching;
