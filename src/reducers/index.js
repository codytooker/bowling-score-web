import { combineReducers } from 'redux';
import auth from './auth';
import games from './games';
import frames from './frames';

export default combineReducers({
  auth,
  games,
  frames,
});
