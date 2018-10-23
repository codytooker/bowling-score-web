import axios from 'axios';

import withUser from '../utils/withUser';
import {
  UPDATE_FRAME,
} from './types';

const updateFrame = data => ({
  type: UPDATE_FRAME,
  payload: data,
});

export const setThrow = (id, ball, pins) => (dispatch, getState) => {
  const data = withUser({ ball, pins }, getState());

  return axios.patch(`/frames/${id}`, data)
    .then(res => dispatch(updateFrame(res.data)));
};
