import axios from 'axios';

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