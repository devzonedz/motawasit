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
      .get(`${process.env.REACT_APP_API_V2}/authors?letter=${letter}&type=mutawassit`, { headers })
      .then(res => {
        return res;
      })
      .catch(err => {});
  } else {
    data = await axios
      .get(`${process.env.REACT_APP_API_V2}/authors?type=mutawassit`, { headers })
      .then(res => {
        return res;
      })
      .catch(err => {});
  }
  return data;
};

export const getAuthor = id => async (dispatch, getState) => {
  let data = await axios
    .get(`${process.env.REACT_APP_API_V2}/authors/${id}`, { headers })
    .then(res => {
      return res;
    })
    .catch(err => {});

  return data;
};
