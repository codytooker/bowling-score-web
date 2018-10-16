import axios from 'axios';
import { normalize } from 'normalizr';

import * as schema from './schema';

import {
  ADD_GAME,
  REQUEST_GAMES,
  RECEIVE_GAMES,
  INVALIDATE_GAMES,
} from './types';

export const invalidateGames = () => {
  return {
    type: INVALIDATE_GAMES
  }
}

const requestGames = () => {
  return {
    type: REQUEST_GAMES,
  }
}

const receiveGames = data => {
  return {
    type: RECEIVE_GAMES,
    payload: {
      receivedAt: Date.now(),
      games: data.entities.games,
      gameIds: data.result,
    }
  }
}

const addGame = game => {
  return {
    type: ADD_GAME,
    payload: {
      game
    }
  }
}

const shouldFetchGames = ({ games }) => {
  if (!games.allIds.length) {
    return true;
  } else if(games.isFetching) {
    return false;
  } else {
    return games.didInvalidate;
  }
}

const fetchGames = () => dispatch => {
  dispatch(requestGames());
  return axios.get('/games')
    .then(res => {
      const normalizedData = normalize(res.data.games, [schema.game]);
      dispatch(receiveGames(normalizedData));
    });
}

export const fetchGamesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchGames(getState())) {
    return dispatch(fetchGames());
  }
}

export const createGame = values => dispatch => {
  return axios.post('/games', values)
    .then(res => {
      dispatch(addGame(res.data.game));
    })
    .catch(err => {
      //We also need to figure out how to have axios intercept if anything is tried to happen with an unauthorized token.
      // If it's expired or no user we should automatically run the logout action.
      console.log('this is temporary just seeing if it we get to here, which we should')
    });
}

