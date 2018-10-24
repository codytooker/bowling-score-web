import axios from 'axios';
import { normalize } from 'normalizr';

import * as schema from './schema';
import withUser from '../utils/withUser';
import {
  ADD_GAME,
  REQUEST_GAMES,
  RECEIVE_GAMES,
  INVALIDATE_GAMES,
} from './types';

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
    entities: data.entities,
  },
});

const addGame = data => ({
  type: ADD_GAME,
  payload: {
    receivedAt: Date.now(),
    entities: data.entities,
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
  const data = withUser(values, getState());
  return axios.post('/games', data)
    .then((res) => {
      const normalizedData = normalize(res.data.data, schema.game);
      console.log(normalizedData);
      dispatch(addGame(normalizedData));
    });
};
