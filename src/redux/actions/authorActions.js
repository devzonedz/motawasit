import * as t from '../types';
import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getAuthors = letter => async (dispatch, getState) => {
  let data;
  if (letter !== undefined && letter !== null) {
    data = await axios
      .get(`${process.env.REACT_APP_API}/authors?letter=${letter}`, { headers })
      .then(res => {
        //   console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    data = await axios
      .get(`${process.env.REACT_APP_API}/authors`, { headers })
      .then(res => {
        //   console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  }
  return data;
};
