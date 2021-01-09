import * as t from '../types';
import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getHome = page => async (dispatch, getState) => {
  let data;
  data = await axios
    .get(`${process.env.REACT_APP_API}/home?featured=mutawassit`, { headers })
    .then(res => {
      return res;
    })
    .catch(err => {});
  return data;
};
