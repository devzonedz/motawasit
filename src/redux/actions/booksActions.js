import * as t from '../types';
import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getBooks = (category, translate, featured) => async (
  dispatch,
  getState
) => {
  console.log(translate);
  let data;
  if (translate) {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&category=${category}&translate=${translate}&featured=${featured}`,
        //   { website: 'المتوسط' },
        { headers }
      )
      .then(res => {
        //   console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    data = await axios
      .get(
        `${process.env.REACT_APP_API}/books?website=منشورات المتوسط&category=${category}`,
        //   { website: 'المتوسط' },
        { headers }
      )
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
export const getBook = id => async (dispatch, getState) => {
  const data = await axios
    .get(
      `${process.env.REACT_APP_API}/books/${id}`,
      //   { website: 'المتوسط' },
      { headers }
    )
    .then(res => {
      //   console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
    });
  return data;
};
