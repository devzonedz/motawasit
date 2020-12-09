import * as t from '../types';
import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getSeries = page => async (dispatch, getState) => {
  console.log(page);
  let data;
  data = await axios
    .get(`${process.env.REACT_APP_API}/series`, { headers })
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  return data;
};
