// import * as t from '../types';
import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getArticles = page => async (dispatch, getState) => {
  let data;
  data = await axios
    .get(`${process.env.REACT_APP_API}/articles?page=${page}`, { headers })
    .then(res => {
      return res;
    })
    .catch(err => {});
  return data;
};

export const getArticle = id => async (dispatch, getState) => {
  const data = await axios
    .get(`${process.env.REACT_APP_API}/articles/${id}`, { headers })
    .then(res => {
      return res;
    })
    .catch(err => {});
  return data;
};
