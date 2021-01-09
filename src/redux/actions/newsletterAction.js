import * as t from '../types';
import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const postNews = email => async (dispatch, getState) => {
  let data;
  data = await axios
    .post(`${process.env.REACT_APP_API}/newsletter`, { email }, { headers })
    .then(res => {
      return res;
    })
    .catch(err => {});
  return data;
};
