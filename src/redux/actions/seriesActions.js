import * as t from '../types';
import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getSeries = page => async (dispatch, getState) => {
  let data;
  data = await axios
    .get(`${process.env.REACT_APP_API}/series`, { headers })
    .then(res => {
      return res;
    })
    .catch(err => {});
  return data;
};
export const getCat = page => async (dispatch, getState) => {
  let data;
  data = await axios
    .get(
      `${process.env.REACT_APP_API}/loadCategories?website=منشورات%20المتوسط`,
      { headers }
    )
    .then(res => {
      return res;
    })
    .catch(err => {});
  return data;
};
