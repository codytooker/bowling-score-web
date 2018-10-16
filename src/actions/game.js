import axios from 'axios';
import { normalize } from 'normalizr';

import * as schema from './schema';

import {
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
  console.log(values);
  return axios.post('/game', values)
    .then(res => {
      console.log()
      //TODO: here we need to figure out what to do with the response.
      // add to redux through normalizing and all that,  
    })
    .catch(err => {
      //We also need to figure out how to have axios intercept if anything is tried to happen with an unauthorized token.
      // If it's expired or no user we should automatically run the logout action.
      console.log('this is temporary just seeing if it we get to here, which we should')
    });
}

