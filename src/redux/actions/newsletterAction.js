import * as t from '../types';
import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const postNews = email => async (dispatch, getState) => {
  console.log(email);
  let data;
  data = await axios
    .post(`${process.env.REACT_APP_API}/newsletter?email${email}`, { headers })
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  return data;
};
