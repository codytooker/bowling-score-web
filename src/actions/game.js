import axios from 'axios';
import { normalize } from 'normalizr';

import * as schema from './schema';

import {
  ADD_GAME,
  REQUEST_GAMES,
  RECEIVE_GAMES,
  INVALIDATE_GAMES,
} from './types';
import { getUserID } from '../reducers/auth';

export const invalidateGames = () => ({
  type: INVALIDATE_GAMES,
});

const requestGames = () => ({
  type: REQUEST_GAMES,
});

const receiveGames = data => ({
  type: RECEIVE_GAMES,
  payload: {
    receivedAt: Date.now(),
    games: data.entities.games,
    gameIds: data.result,
  },
});

const addGame = game => ({
  type: ADD_GAME,
  payload: {
    game,
  },
});

const shouldFetchGames = ({ games }) => {
  if (typeof games.meta.lastUpdated === 'undefined') {
    return true;
  } if (!games.allIds.length) {
    return true;
  } if (games.meta.isFetching) {
    return false;
  }
  return games.meta.didInvalidate;
};

const fetchGames = () => (dispatch) => {
  dispatch(requestGames());
  return axios.get('/games')
    .then((res) => {
      const normalizedData = normalize(res.data.data, [schema.game]);
      dispatch(receiveGames(normalizedData));
    });
};

export const fetchGamesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchGames(getState())) {
    return dispatch(fetchGames());
  }

  return false;
};

export const createGame = values => (dispatch, getState) => {
  const data = {
    ...values,
    user: getUserID(getState()),
  };
  return axios.post('/games', data)
    .then((res) => {
      dispatch(addGame(res.data.data));
    });
};
