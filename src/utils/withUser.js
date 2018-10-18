import { getUserID } from '../reducers/auth';

export default (data, state) => ({
  ...data,
  user: getUserID(state),
});
