import { combineReducers } from 'redux';

import {
  ADD_GAME,
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

    case ADD_GAME:
      return {
        ...state,
        [action.payload.game.id]: action.payload.game,
      }

    default: 
      return state;
  }
}

const allIds = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_GAMES:
      return action.payload.gameIds;

    case ADD_GAME:
      return [...state, action.payload.game.id]

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

export function getGames(state) {
  const games = state.games.allIds.map(id => state.games.byId[id]);

  return games.sort((a,b) => {
    return new Date(b.date) - new Date(a.date);
  });
}