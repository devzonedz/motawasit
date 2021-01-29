import * as t from '../types';
import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getPodcasts = page => async (dispatch, getState) => {
  console.log(page);
  let data;
  data = await axios
    .get(`${process.env.REACT_APP_API}/podcast?podcast=audio`, {
      headers,
    })
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  return data;
};
export const getVideos = page => async (dispatch, getState) => {
  console.log(page);
  let data;
  data = await axios
    .get(`${process.env.REACT_APP_API}/podcast?podcast=video`, {
      headers,
    })
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  return data;
};
