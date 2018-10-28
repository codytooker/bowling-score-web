import axios from 'axios';
import { normalize } from 'normalizr';

import * as schema from './schema';
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
    .then((res) => {
      const normalizedData = normalize(res.data.data, schema.game);
      dispatch(updateFrame(normalizedData));
      return res.data.data;
    });
};
